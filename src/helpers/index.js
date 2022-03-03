function setPagination (options) {
  const offset = (options.page - 1) * options.limit

  if (options.limit < 0) {
    delete options.limit
    return options
  }

  return {
    ...options,
    offset
  }
}

const businessUnit = {
  '18cc44bd-79e4-4518-aa11-9d56a1398bef': 'DIGITAL',
  '24752474-8410-4bff-811d-f24672a9c713': 'OUTDOOR',
  'b1cb1739-632d-411a-87de-c7a430b290a4': 'INDOOR',
  DIGITAL: '18cc44bd-79e4-4518-aa11-9d56a1398bef',
  OUTDOOR: '24752474-8410-4bff-811d-f24672a9c713',
  INDOOR: 'b1cb1739-632d-411a-87de-c7a430b290a4'
}

function getBusinessUnitId (id) {
  return businessUnit[id]
}

function getParent (data, parentId) {
  const parents = data.filter(i => i.id === parentId)
  if (parents.length) {
    const parent = parents[0]

    if (parent.parentId) {
      return `${parent.name}, ${getParent(data, parent.parentId)}`
    }

    return parent.name
  }
}

const status = [
  {
    id: '0d7d5fd4-a247-403f-a95d-c79770684251',
    name: 'Pre-reserva'
  },
  {
    id: '3fb215bf-2acb-4895-bbeb-7cb5cbcd506c',
    name: 'En espera de autorización'
  },
  {
    id: '433905e6-252b-45ba-987a-ce005f04edb9',
    name: 'Solicitud de prorroga'
  },
  {
    id: '6e546763-c9f3-4024-9ebd-85c7678271e4',
    name: 'Borrador'
  },
  {
    id: '854e532f-a56d-42d2-8175-411aedeb349a',
    name: 'Rechazado'
  }
]

const statusTemporal = status.reduce((a, c) => [...a, c.id], [])

module.exports = {
  setPagination,
  getBusinessUnitId,
  getParent,
  statusTemporal
}
