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

export const CHANGE_TASK_STATUS = gql`
  mutation ChangeTaskStatus($id: String!, $status: String!) {
    changeTaskStatus(id: $id, status: $status) {
      id
      name
      description
      openedBy
      status
      isOpen
    }
  }
`;
