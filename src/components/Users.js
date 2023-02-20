import "../css/Table.css";
import React, { useState } from "react";
import useFetch from "../useFetch";
import { format } from "date-fns";

const getFullName = (name) => {
  return name["first"] + " " + name["last"];
};

const getFullAddress = (location) => {
  return (
    location["street"]["number"] +
    " " +
    location["street"]["name"] +
    ". " +
    location["city"] +
    ", " +
    location["state"]
  );
};

const UserRow = (userData) => {
  const user = userData.user;
  const fullName = getFullName(user["name"]);
  const fullAddress = getFullAddress(user["location"]);
  const date = new Date(user["registered"]["date"]);
  return (
    <tr>
      <td data-name="User">
        <div className="table-item">
          <div className="table-thumb">
            <img src={user["picture"]["thumbnail"]} alt={fullName} />
          </div>
          <div className="table-content">
            <div className="table--title">{fullName}</div>
            <div className="table--desc">{fullAddress}</div>
          </div>
        </div>
      </td>
      <td data-name="Contact Information">
        <div className="table--title">{user["email"]}</div>
        <div className="table--desc">{user["phone"]}</div>
      </td>
      <td data-name="Registration Date">
        <div className="table--title">{format(date, "PP")}</div>
        <div className="table--desc">{format(date, "p")}</div>
      </td>
      <td data-name="Country/Post Code">
        <div className="table--title">{user["location"]["country"]}</div>
        <div className="table--desc">{user["location"]["postcode"]}</div>
      </td>
    </tr>
  );
};

const Users = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://randomuser.me/api?results=8");

  if (loading) return <h1 className="loading">Loadign</h1>;
  if (error) return console.log(error);

  let usersListing = [];
  if (users !== null) {
    users.results.map((user) =>
      usersListing.push(<UserRow key={user.name.first} user={user} />)
    );
  }

  const [modalInfo,setModalInfo] = useState([]);
  const [showModal,setShowModal] = useState(false);

  return (
    <table className="table-design">
      <thead>
        <tr>
          <th>User</th>
          <th>Contact Information</th>
          <th>Registration Date</th>
          <th>Country/Post Code</th>
        </tr>
      </thead>
      <tbody>{usersListing}</tbody>
    </table>
  );
};

export default Users;
