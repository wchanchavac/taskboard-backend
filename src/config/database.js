const fs = require("fs");
const path = require("path");

module.exports = {
  development: {
    username: "root",
    password: "",
    database: "taskboard",
    host: "localhost",
    dialect: "mysql",
    logging: console.log,
    port: "3306",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  beta: {
    username: process.env.PLANETSCALE_DB_USERNAME || "",
    password: process.env.PLANETSCALE_DB_PASSWORD || "",
    database: process.env.PLANETSCALE_DB || "",
    host: process.env.PLANETSCALE_DB_HOST || "",
    dialect: "mysql",
    logging: false,
    port: 3306,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(
          process.env.PLANETSCALE_SSL_CERT_PATH ||
            path.join(__dirname, "/cacert-2021-09-30.pem")
        ),
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    username: process.env.PLANETSCALE_DB_USERNAME || "",
    password: process.env.PLANETSCALE_DB_PASSWORD || "",
    database: process.env.PLANETSCALE_DB || "",
    host: process.env.PLANETSCALE_DB_HOST || "",
    dialect: "mysql",
    logging: false,
    port: 3306,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(
          process.env.PLANETSCALE_SSL_CERT_PATH ||
            path.join(__dirname, "/cacert-2021-09-30.pem")
        ),
        rejectUnauthorized: false,
      },
    },
  },
};
