const typeDefinition = `
type Query {
  info: String!
}

type Mutation {
  createUser(googleToken: String!): User!
}

type User {
  name: String!
  email: String!
  profile: Profile!
  token: String!
}

type Profile {
  imageUrl: String!
  lastUpdated: String!
}
`;

export default typeDefinition;
