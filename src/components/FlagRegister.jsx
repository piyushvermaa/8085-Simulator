import React from 'react';
import { Table } from 'react-bootstrap';
import './FlagRegister.css'; 

const FlagRegister=()=>{
    return (
        <>
        <div className="table-container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="column-S">S</th>
            <th className="column-Z">Z</th>
            <th className="column-X">X</th>
            <th className="column-AC">AC</th>
            <th className="column-X2">X</th>
            <th className="column-P">P</th>
            <th className="column-CY">CY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="column-S-value">0</td>
            <td className="column-Z-value">0</td>
            <td className="column-X-value">0</td>
            <td className="column-AC-value">0</td>
            <td className="column-X2-value">0</td>
            <td className="column-P-value">0</td>
            <td className="column-CY-value">0</td>
          </tr>
        </tbody>
      </Table>
    </div>
        </>
    )
}

export default FlagRegister;