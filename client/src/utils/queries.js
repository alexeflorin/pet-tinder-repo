import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      password
      contactCel
      state
      reasonsToGetPet
      age
      gender
    }
  }
`;

export const QUERY_PETS = gql`
  query Pets {
    pets {
      _id
      namePet
      picturePet
      breedPet
      ownerPet
  }
`;

export const QUERY_MATCHUPS = gql`
  query Match($_id: String) {
    Match(_id: $_id) {
      userId
      petId
    }
  }
`;
