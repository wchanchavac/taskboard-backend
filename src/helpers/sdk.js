const sdk = require('@pentcloud/sdk')({
  apiHost: 'https://sdk.api.ubisuite.com',
  apiVersion: 'v1',
  apiKey: 'Rkam5Ub7QN4YDQVPFnsB63iogXWw4cgM9CH6jeDh'
})

const cognito = sdk.auth.cognito({
  app: 'symfonia',
  client: 's13p05cofmp8pffvimfukpntk',
  pool: 'us-east-1_Kyg1NgntA'
})

const s3 = sdk.storage.s3({
  bucket: 'gpovallas'
})

const mail = sdk.mail.ses({
  subject: 'Symfonia',
  from: {
    email: 'no-reply@symfonia.io',
    name: 'Symfonia'
  }
})

module.exports = {
  cognito,
  s3,
  mail
}
