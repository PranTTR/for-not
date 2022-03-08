import {ApolloServer,gql} from 'apollo-server';
import bcrypt from 'bcryptjs';

const users = [
    {name: "Apinan" , sex: "M" , id: 0, password: "abc123"},
    {name: "Pran" , sex: "F" , id: 1, password: "abc123"},
    {name: "James" , sex: "M" , id: 2, password: "abc123"},
    {name: "Model" , sex: "M" , id: 3, password: "abc123"},
    {name: "Fah" , sex: "F" , id: 4, password: "abc123"},
    {name: "Noon" , sex: "F" , id: 5, password: "abc123"},
];

const books = [
    { title: "The lord", userID: 3, id: 0},
    { title: "The of", userID: 2, id: 1},
    { title: "The Ring ", userID: 5, id: 2},
    { title: "The Thai", userID: 1, id: 3},

];

//schema
const typeDefs = gql`
    type Query {
        hello: String
        users: [User]
        user(name: String): User
    }
    type User {
        id: ID
        name: String
        password: String
        sex: String
        books: [Book]
    }
    type Book {
        title: String
    }
    type Mutation {
        addUser(name: String, sex: String): User
        createUser(name: String, password: String): User
        loginUser(name: String, password: String): String
    }
`;

//resolver
const resolvers = {
    Query: {
        hello: (parent,args,context,info) =>{
            return "world";
        },
        users: (parent,args,context,info) =>{
            return users;
        },
        user: (parent,args,context,info) =>{
            return users.find(user => user.name === args.name);
        },
    },
    User: {
        books: ({ id }, args, context, info) => {
            return books.filter(book => book.userID == id);
        },
    },
    Mutation: {
        addUser: (parent, args, context, info) => {
            const {name, sex} = args; // const name = args.name;

            //add info to database
            users.push({name: name, sex: sex});
            return {name: name, sex: sex};
        },
        createUser: (parent, args, context, info) => {
            const {name, password} = args;
            const hashPassword = bcrypt.hashSync(password, 10);

            users.push({name: name,password: hashPassword});

            return {name: name, password: hashPassword};
        },
        loginUser: (parent, args, context) => {
            const user = user.filter(user => user.name === args.name);

            const correct = bcrypt.compareSync(user.password, args.password);
            if(correct) {
                return "correct"
            }

            return "Not correct";
        }
};

//function apollo-server
const startApolloServer = async (typeDefs,resolvers) => {
    const server = new ApolloServer({typeDefs, resolvers});
    const {url} = await server.listen();
    console.log(`Server ready at ${url}`);
};

//call function
startApolloServer(typeDefs,resolvers);