import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Pavadinimas</th>
            <th className="expand">Apibūdinimas</th>
            <th>Kvadratūra</th>
            <th>Vietų kiekis</th>
            <th>Registracija</th>
            <th>Patogumai</th>
            <th>Būsena</th>
            <th>Redaguoti</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            // const statusText =
            //   row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>{row.pavadinimas}</td>
                <td className="expand">{row.apibūdinimas}</td>
                <td>{row.kvadratūra}</td>
                <td>{row.vietos}</td>
                <td className="expand">{row.perviršis}</td>
                <td>{row.patogumai}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {row.status}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
