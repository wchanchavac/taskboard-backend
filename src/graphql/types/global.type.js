module.exports = `
    type Session {
        token: String!
    }

    input SignUp {
        name: String! 
        email: EmailAddress! 
        password: String! 
        # boards: [ID]! 
    }

    type Message {
        message: String
    }

    type File {
        url: URL!
        name: String!
    }

    type Query {
        # downloadFile(input: UploadFile): File!
        version: String
    }

    input DeleteInput {
        id: ID!
    }

    input Options {
        where: JSONObject
        limit: Int = 10
        # offset: Int
        page: Int = 1
        order: [[String!]!]
    }

    input UploadFile {
        file: String!
        key: String = "files"
    }
    
    type Mutation {
        signIn(email: EmailAddress!, password: String!): Session!
        signUp(input: SignUp): Message!
        # uploadFile(input: UploadFile): File!
    }
`
