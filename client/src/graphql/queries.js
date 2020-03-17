import { gql } from 'apollo-boost';

export const GET_TASKS_QUERY = gql`
  {
    tasks {
      id
      name
      description
      openedBy
      status
      isOpen
      issues {
        name
        description
        isOpen
      }
    }
  }
`;
