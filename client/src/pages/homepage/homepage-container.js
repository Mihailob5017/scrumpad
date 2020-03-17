import React from 'react';
import { GET_TASKS_QUERY } from '../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import Homepage from './homepage';
const HomepageContainer = () => {
  const { error, loading, data } = useQuery(GET_TASKS_QUERY);

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error);
    return <h2>Something went Wrong</h2>;
  }
  const { tasks } = data;
  return <Homepage tasks={tasks} />;
};

export default HomepageContainer;
