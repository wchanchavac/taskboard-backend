const { merge, groupBy } = require('lodash')

function capitalizeWords(string = '') {
	return string.replace(/\b\w/g, (l) => l.toUpperCase())
}

function capitalizeWords(string = '') {
	return string.replace(/\b\w/g, (l) => l.toUpperCase())
}

function random(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
}

function randomPassword(length = 16) {
	let pool = {
		0: 'zxcvbnmasdfghjklqwertyuiop'.split(''),
		1: '1234567890'.split(''),
		2: '!@#$%^&*()+{}'.split(''),
		3: 'ZXCVBNMASDFGHJKLQWERTYUIOP'.split(''),
	}

	let password = ''
	for (let i = 0; i < length; i++) {
		let j = 0
		i < 4 ? (j = i) : (j = random(0, 4))
		password += pool[j][random(0, pool[j].length)]
	}

	return password
}

function ufid(file) {
	file = file || 'default.jpg'
	return `${new Date().getTime()}-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
		.replace(/[xy]/g, (c) => {
			var r = (Math.random() * 16) | 0,
				v = c == 'x' ? r : (r & 0x3) | 0x8
			return v.toString(16)
		})
		.concat(`.${file.split('.').pop()}`)
}

function scope(model, session) {
	return model.scope({ method: ['byEnterprise', session.enterprise] })
}

function currencyConverter(amount = 0, exchangeRate = 1) {
	if (amoun < 0) return 0
	return exchangeRate > 1 ? amount * exchangeRate : amount / exchangeRate
}

function dateRangeGenerator() {
	let ranges = [
		['r1', 31, -30],
		['r2', 1, -31],
		['r3', -30, -30],
		['r4', -60, -30],
		['r5', -90],
	]

	let params = {}

	for (let i = 0; i < ranges.length; i++) {
		const [key, end, start] = ranges[i]

		let date = new Date()
		params[key] = []

		date.setDate(date.getDate() + end)
		params[key].push(date.dateOnlyUTC())

		if (!start) continue
		date.setDate(date.getDate() + start)
		params[key].unshift(date.dateOnlyUTC())
	}

	return params
}

function parseOverdueAmount(data, params = {}) {
	let values = data.length ? data[0] : { total: 0, r1: 0, r2: 0, r3: 0, r4: 0, r5: 0 }
	let info = {
		total: values.total,
		items: [],
	}
	let labels = [
		'Aún no vencido',
		'1-30 días de retraso',
		'31-60 días de retraso',
		'61-90 días de retraso',
		'> 90 días de retraso',
	]

	for (let i = 0; i < labels.length; i++) {
		const key = `r${i + 1}`
		const label = labels[i]
		info.items.push({
			label,
			amount: values[key],
			range: params[key],
		})
	}

	return info
}

function buildWhereForBills(status, model = 'invoice') {
	if (status === 'CANCELLED') {
		return {
			deletedAt: {
				_not: null,
			},
		}
	}

	if (status === 'OVERDUE') {
		return {
			dueDate: { _lt: new Date().dateOnlyUTC() },
			remaining: { _gt: 0 },
			deletedAt: null,
		}
	}

	if (status === 'UNPAID') {
		return {
			dueDate: { _gte: new Date().dateOnlyUTC() },
			remaining: { _col: `${model}.total` },
			deletedAt: null,
		}
	}

	if (status === 'PAID') {
		return {
			remaining: { _lte: 0 },
			deletedAt: null,
		}
	}

	if (status === 'PARTIAL') {
		return {
			dueDate: { _gte: new Date().dateOnlyUTC() },
			total: { _gt: { _col: `${model}.remaining` } },
			remaining: { _gt: 0 },
			deletedAt: null,
		}
	}

	return {}
}

function getSalary({ salary, startDate: initDate, $payrollRange }, enterprise, frequency) {
	const startDate = new Date(initDate)

	if (!$payrollRange) return salary
	let daysDiff = startDate.getDaysDiff($payrollRange.endDate)

	if (enterprise.payroll.frequency === 'ONCE_A_MONTH' && startDate.isMonthAndYear($payrollRange.endDate)) {
		salary = (salary / 30) * daysDiff
	} else if (enterprise.payroll.frequency === 'TWICE_A_MONTH') {
		let q1 = salary * (enterprise.payroll.firstFortnight / 100)
		let q2 = salary * (enterprise.payroll.secondFortnight / 100)

		if (startDate.isMonthAndYear($payrollRange.endDate)) {
			let { d } = startDate.getData()
			if (frequency.firstFortnight && d < 16) {
				salary = q1 - (salary / 30) * d
			} else if (frequency.secondFortnight & (d > 15)) {
				salary = q2 - (salary / 30) * Math.abs(d - 15)
			} else if (frequency.firstFortnight) {
				salary = q1
			} else {
				salary = q2
			}
		} else if (frequency.firstFortnight) {
			salary = q1
		} else {
			salary = q2
		}
	}

	return Number(Number(salary).toFixed(2))
}

function parseWherePayrollRange({ startDate, endDate }) {
	return {
		_or: [
			{
				frequency: 'ONLY_ONCE',
				dueDate: {
					_between: [startDate, endDate],
				},
			},
			{
				frequency: 'EVERY_MONTH',
				dueDate: {
					_lt: endDate,
				},
			},
		],
	}
}

function productSubtotal({ quantity, price }, taxes, { includeTaxes }) {
	let temp = quantity * price
	let rate = taxes.reduce((a, t) => a + t.rate / 100, 1)
	let cost = includeTaxes ? temp / rate : temp
	let taxesAmount = includeTaxes ? temp - temp / rate : temp * rate - temp
	let subtotal = includeTaxes ? temp : temp + taxesAmount

	return { subtotal, price: cost }
}

function productTransactions(product, taxes, invoice, price) {
	const { description, accountId } = product
	const { date, customerId, vendorId } = invoice
	let transactions = taxes.map((t) => ({
		date,
		description,
		amount: price * (t.rate / 100),
		entityType: 'TAX',
		customerId,
		taxRateId: t.id,
		vendorId,
		accountId: t.tax.accountId,
	}))

	return [
		{
			date,
			description,
			amount: price,
			customerId,
			vendorId,
			accountId,
		},
		...transactions,
	]
}

async function createInvoiceProductTransactions({ db, session, transaction }, transactions, invoice) {
	const { id: entityId, customerId, vendorId, date, description, total, currencyId, exchangeRate } = invoice.toJSON()
	const { sub: createdBy, enterprise: enterpriseId } = session
	const entityType = 'INVOICE'
	let account = await scope(db.Account, session).findOne({
		where: {
			name: 'Cuentas por cobrar',
		},
	})

	let parent = await db.Transaction.create(
		{
			date,
			description,
			amount: total,
			type: 'DEBIT',
			customerId,
			vendorId,
			entityId,
			entityType,
			accountId: account.id,
			enterpriseId,
			createdBy,
			currencyId,
			exchangeRate,
		},
		{ transaction, hooks: false },
	)

	transactions = transactions.map((t, i) => ({
		...t,
		order: i + 1,
		parentId: parent.id,
		type: 'CREDIT',
		enterpriseId,
		createdBy,
		entityId,
		entityType: t.entityType || entityType,
		currencyId,
		exchangeRate,
	}))
	await db.Transaction.bulkCreate(transactions, { transaction, hooks: false })
}

async function createBillProductTransactions({ db, session, transaction }, transactions, bill) {
	const { id: entityId, customerId, date, description, vendorId, total, currencyId, exchangeRate } = bill.toJSON()
	const { sub: createdBy, enterprise: enterpriseId } = session
	const entityType = 'BILL'
	let account = await scope(db.Account, session).findOne({
		where: {
			name: 'Cuentas por pagar',
		},
	})

	let parent = await db.Transaction.create(
		{
			date,
			description,
			amount: total,
			type: 'CREDIT',
			customerId,
			vendorId,
			entityId,
			entityType,
			accountId: account.id,
			enterpriseId,
			createdBy,
			currencyId,
			exchangeRate,
		},
		{ transaction, hooks: false },
	)

	transactions = transactions.map((t, i) => ({
		...t,
		order: i + 1,
		parentId: parent.id,
		type: 'DEBIT',
		enterpriseId,
		createdBy,
		entityId,
		entityType: t.entityType || entityType,
		currencyId,
		exchangeRate,
	}))
	await db.Transaction.bulkCreate(transactions, { transaction, hooks: false })
}

function makePaid(dueDate, frequency) {
	console.log(dueDate)
	console.log(frequency)
	try {
		let { d } = new Date(dueDate).getData()

		if ((frequency.firstFortnight && d < 16) || (frequency.secondFortnight && d > 15)) {
			return true
		}

		return false
	} catch (error) {
		return false
	}
}

function getShortMonth(month) {
	const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
	return months[months]
}

function getLastMonths(lastMonths = 13) {
	let keys = {}
	let keyList = []
	let date = new Date()
	date.setUTCDate(1)

	for (let i = 0; i < lastMonths; i++) {
		date.addMonths(i > 0 ? -1 : 0)
		let key = `${date.getShortMonth()}-${date.getShortYear()}`
		keyList.push(key)
		keys[key] = []
	}

	return [keys, keyList]
}

function getValuesByKey(data, months = 13) {
	let amount = 0
	let [keys, keyList] = getLastMonths(months)

	let info = groupBy(data, function (i) {
		let date = new Date(i.date)
		return `${date.getShortMonth()}-${date.getShortYear()}`
	})

	for (const key in merge(info, keys)) {
		if (Object.hasOwnProperty.call(info, key)) {
			const item = info[key]
			let value = item.reduce((acc, curr) => acc + Number(curr.amount), 0)
			amount += value
			let index = keyList.indexOf(key)
			keyList[index] = {
				label: key,
				value,
				description: value,
			}
		}
	}

	return [keyList.reverse(), amount]
}
function getDatesByPayroll(enterprise, payroll) {
	let info = {
		$enterprise: enterprise,
		$frequency: {},
	}

	if (!payroll) {
		let date = new Date()

		if (enterprise.payroll.frequency === 'ONCE_A_MONTH') {
			;[info.startDate, info.endDate, info.year, info.month] = date.getMonthly()
		} else {
			let fortnight
			;[info.startDate, info.endDate, info.year, info.month, fortnight] = date.getFortnight()
			info.$frequency.firstFortnight = fortnight === 'Q1' ? true : false
			info.$frequency.secondFortnight = fortnight === 'Q2' ? true : false
		}
	} else {
		let date = new Date(payroll.endDate)

		if (enterprise.payroll.frequency === 'ONCE_A_MONTH') {
			;[info.startDate, info.endDate, info.year, info.month] = date.getNextMonthly()
		} else {
			let fortnight
			;[info.startDate, info.endDate, info.year, info.month, fortnight] = date.getNextFortnight()

			info.$frequency.firstFortnight = fortnight === 'Q1' ? true : false
			info.$frequency.secondFortnight = fortnight === 'Q2' ? true : false
		}
	}

	return info
}

async function getAccountsByPayroll(db, session) {
	const account = scope(db.Account, session)

	return {
		salary: await account.findOne({
			where: { globalId: '6235be57-35d9-434b-95b2-c58e1968eb92' },
		}),
		salaryPayable: await account.findOne({
			where: { globalId: '019ea585-6f20-4a72-affd-4684d48dce45' },
		}),
		bank: await account.findOne({
			where: { globalId: '69745b8a-db53-432f-bd1c-614775dfbc1d' },
		}),
	}
}

module.exports = {
	getAccountsByPayroll,
	getShortMonth,
	getDatesByPayroll,
	makePaid,
	randomPassword,
	ufid,
	capitalizeWords,
	scope,
	currencyConverter,
	dateRangeGenerator,
	parseOverdueAmount,
	buildWhereForBills,
	getSalary,
	parseWherePayrollRange,
	productSubtotal,
	productTransactions,
	createInvoiceProductTransactions,
	createBillProductTransactions,
	getLastMonths,
	getValuesByKey,
}
