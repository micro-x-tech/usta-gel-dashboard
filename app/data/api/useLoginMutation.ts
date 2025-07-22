import { useMutation } from "@apollo/client";
import { gql } from "../../__generated__";

const LOGIN = gql(`
  mutation Login(
    $password: String!
    $phoneNumber: PhoneNumber!
    $profileType: ProfileType!
  ) {
    login(
      password: $password
      phoneNumber: $phoneNumber
      profileType: $profileType
    ) {
      accessToken
      refreshToken
    }
  }
`);

export const useLoginMutation = () => {
  return useMutation(LOGIN);
};
