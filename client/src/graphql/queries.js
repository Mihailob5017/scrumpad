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

export const GET_ALL_ISSUES_QUERY = gql`
  {
    tasks {
      issues {
        name
        description
        isOpen
        taskId
      }
    }
  }
`;

export const GET_SPECIFIC_ISSUE_QUERY = gql`
  query Task($id: ID!) {
    task(id: $id) {
      name
      issues {
        name
        description
        isOpen
      }
    }
  }
`;
