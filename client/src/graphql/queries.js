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
      id
      issues {
        id
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
      id
      issues {
        id
        name
        description
        isOpen
        taskId
      }
    }
  }
`;

export const CLOSE_SPECIFIC_ISSUE = gql`
  mutation CloseIssue($id: ID!) {
    closeIssue(id: $id) {
      name
    }
  }
`;

export const OPEN_NEW_ISSUE = gql`
  mutation OpenIssue(
    $name: String
    $description: String
    $taskId: String
    $isOpen: Boolean
  ) {
    openIssue(
      name: $name
      description: $description
      taskId: $taskId
      isOpen: $isOpen
    ) {
      name
    }
  }
`;

export const OPEN_NEW_TASK = gql`
  mutation OpenTask(
    $name: String
    $description: String
    $openedBy: String
    $status: String
    $isOpen: Boolean
  ) {
    openTask(
      name: $name
      description: $description
      openedBy: $openedBy
      status: $status
      isOpen: $isOpen
    ) {
      name
    }
  }
`;
