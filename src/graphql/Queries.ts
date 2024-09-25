import { gql } from "@apollo/client";

export const FETCH_EVENTS = gql`
  query {
    events {
      edges {
        node {
          id
          title
          description
          date
        }
      }
    }
  }
`;
