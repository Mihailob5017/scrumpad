import React from 'react';
import { GET_TASKS_QUERY } from '../../graphql/queries';
import { useQuery } from '@apollo/react-hooks';
import Homepage from './homepage';

//  Loader & Error
import Loader from '../../components/loader/loader';
import Error from '../../components/error/error';
const HomepageContainer = () => {
  const { error, loading, data } = useQuery(GET_TASKS_QUERY);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const { tasks } = data;
  return <Homepage tasks={tasks} />;
};

export default HomepageContainer;
