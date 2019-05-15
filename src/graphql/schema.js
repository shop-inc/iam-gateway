const typeDefinition = `
type Query {
  info: String!
}

type Mutation {
  createUser(googleToken: String!): User!
  loginUser(googleToken: String!): User!
  verifyUser(emailToken: String!): VerificationMessage!
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

type VerificationMessage {
  status: String!
  verificationDetails: VerificationDetails!
}

type VerificationDetails {
  verificationStatus: Boolean!
  dateVerified: String!
}
`;

export default typeDefinition;
