import React from 'react';
import { withRouter } from 'react-router-dom';
import { returnIssueQuery, getAllIssues } from '../../helper/helper-functions';
import { useQuery } from '@apollo/react-hooks';
import Issue from './issue';
const IssueContainer = props => {
  const { query, id } = returnIssueQuery(props.location.pathname);
  const { error, loading, data } = useQuery(query, { variables: { id } });
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (loading) {
    return <div>Loading</div>;
  }

  return <Issue query={query} issues={getAllIssues(data)} />;
};

export default withRouter(IssueContainer);
