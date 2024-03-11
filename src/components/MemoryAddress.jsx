// MemoryAddress.js

import React from 'react';
import { Table } from 'react-bootstrap';
import './MemoryAddress.css'; // Import your Tailwind CSS file

const MemoryAddress = () => {
  // Generate 100 rows
  const tableRows = Array.from({ length: 100 }, (_, index) => (
    <tr key={index}>
      <td>{`Memory Address ${index + 1}`}</td>
      <td>Value</td>
    </tr>
  ));
  return (
    <>
    <div className="memory-address-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Memory Address</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </div>
    </>
  );
};

export default MemoryAddress;
