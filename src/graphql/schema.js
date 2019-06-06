const typeDefinition = `
type Query {
  info: String!
}

type Mutation {
  createUser(googleToken: String!): User!
  loginUser(googleToken: String!): User!
  verifyUser(emailToken: String!): VerificationMessage!
  logoutUser(userToken: String!): LogoutMessage!
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

type LogoutMessage {
  message: String!
}
`;

export default typeDefinition;
