import React from 'react';
import { withRouter } from 'react-router-dom';
import { returnIssueQuery } from '../../helper/helper-functions';
import { useQuery } from '@apollo/react-hooks';
const IssueContainer = props => {
  const { query, id } = returnIssueQuery(props.location.pathname);
  const { error, loading, data } = useQuery(query, { variables: { id } });
  if (error) {
    return <div>error</div>;
    console.log(error);
  }
  if (loading) {
    return <div>Loading</div>;
  }
  console.log(data);
  return <div></div>;
};

export default withRouter(IssueContainer);
