"use strict";

const { encode } = require("jwt-simple");
const env = process.env.NODE_ENV || "development";
const application = require("./../../config/application")[env];
const { ApolloError } = require("apollo-server-express");
const bcrypt = require("bcrypt");
const getSession = require("../../middlewares/getSession");

module.exports = {
  Query: {
    version() {
      return "1.0.0";
    },
  },
  Mutation: {
    async signIn(obj, { email, password }, { db }) {
      try {
        const user = await db.User.findOne({
          where: {
            email,
            password,
          },
        });

        if (!user) throw new ApolloError("Invalid credentials", "UNAUTHORIZED");

        // if (!await bcrypt.compareSync(password, user.password))
        // 	throw new ApolloError(`Invalid credentials`, 'UNAUTHORIZED')
        const token = encode(
          {
            email: user.email,
            sub: user.id,
            // org: user.organizationId
          },
          application.secret
        );

        return {
          token,
        };
      } catch (e) {
        throw new ApolloError(e.message, e.code);
      }
    },
    async signUp(obj, { input }, { db }) {
      try {
        let tmp = await db.User.findOne({
          where: { email: input.email },
        });

        if (tmp) {
          throw new ApolloError(
            `The user with email: ${input.email} is already registered`,
            "CONFLICT"
          );
        }

        const [user, created] = await db.User.findOrCreate({
          where: { email: input.email },
          defaults: input,
        });

        await user.update(input, {
          hooks: false,
        });

        return {
          message: "Your registration was successful",
        };
      } catch (e) {
        throw new ApolloError(e.message, e.code);
      }
    },
  },
};
