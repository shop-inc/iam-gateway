import procedures from '../procedures';

const {
  createUser,
  loginUser,
} = procedures;

const resolver = {
  Query: {
    info: () => 'Welcome to shopinc iam gateway',
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const newUser = await createUser(args.googleToken);
        return newUser;
      } catch (error) {
        throw new Error(error);
      }
    },
    loginUser: async (parent, args) => {
      try {
        const loggedInUser = await loginUser(args.googleToken);
        return loggedInUser;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

export default resolver;
