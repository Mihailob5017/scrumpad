import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  returnIssueQuery,
  getAllIssues,
  getId
} from '../../helper/helper-functions';
import { useQuery } from '@apollo/react-hooks';
import Issue from './issue';
//  Loader & Error
import Loader from '../../components/loader/loader';
import Error from '../../components/error/error';
const IssueContainer = props => {
  const { query, id } = returnIssueQuery(props.location.pathname);
  const { error, loading, data } = useQuery(query, { variables: { id } });
  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  return (
    <Issue
      query={query}
      taskId={getId(data)}
      isAddVisiable={id === '' ? false : true}
      issues={getAllIssues(data)}
    />
  );
};

export default withRouter(IssueContainer);
