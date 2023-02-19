import React from 'react';
import useFetch from '../useFetch';

const UserRow = (user) => {
  return (
    <tr>
      <td>
        <div className="user">
          <img
            src={user.picture}
            alt={user.name.first + ' ' + user.name.last}
          ></img>
        </div>
      </td>
    </tr>
  );
};

const Users = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch('https://randomuser.me/api?results=8');

  if (loading) return <h1 className="loading">Loadign</h1>;
  if (error) return console.log(error);

  let usersListing = [];
  if (users !== null) {
    users.results.map((user) =>
      usersListing.push(<UserRow key={user.name.first} user={user} />)
    );
  }

  return (
    <table>
      <tbody>{usersListing}</tbody>
    </table>
  );
};

export default Users;
