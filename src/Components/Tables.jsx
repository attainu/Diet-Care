import React from "react";
import { Table } from "reactstrap";

const Tables = (props) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Products</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Butter</td>
          <td>1 packet</td>
          <button>Delete</button>
        </tr>
        <tr>
          <td>Paneer</td>
          <td>500g</td>
          <button>Delete</button>
        </tr>
        <tr>
          <td>Olive Oil</td>
          <td>20ml</td>
          <button>Delete</button>
        </tr>
      </tbody>
    </Table>
  );
};

export default Tables;
