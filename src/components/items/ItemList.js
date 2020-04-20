import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>User</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(item => {
        return (
          <tr key={item.id}>
            <td>
              <Link to={"/item/" + item.slug}>{item.name}</Link>
            </td>
            <td>{item.description}</td>
            <td>{item.userName}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ItemList;
