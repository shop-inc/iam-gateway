import createdUser from '../procedures/createUser';

const resolver = {
  Query: {
    info: () => 'Welcome to shopinc iam gateway',
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const newUser = await createdUser(args.googleToken);
        return newUser;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

export default resolver;
