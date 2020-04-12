import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Card } from '@material-ui/core';

export const GET_USERS = gql`
  {
    users {
      id
      name
      email
      phone
      address,
      zipCode,
      file_upload
    }
  }
`;

export function UserList() {
  const { loading, error, data } = useQuery(GET_USERS, {
    // pollInterval: 5000, //Call Function eache 5 seconds
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}> Error! ${error.message}`</p>;
  return (
    <div id='viewCustomers'>
      <h5>LIST OF USERS</h5>
      {data.users.map((p, i) => (
        <Card
          key={i}
          style={{ padding: '10px', margin: '5px' }}
        >{`${p.name}  ${p.email} ${p.phone} ${p.file_upload}`}</Card>
      ))}
    </div>
  );
}