import { useState } from "react";

import "./App.css";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      pavadinimas: "Palata 1",
      apibūdinimas: "Vienviete palata",
      kvadratūra: "14",
      vietos: "2",
      perviršis: "Taip",
      patogumai: "Yra",
      status: "laisva",
    },
    {
      pavadinimas: "Palata 2",
      apibūdinimas: "Dviviete palata",
      kvadratūra: "12",
      vietos: "3",
      perviršis: "Ne",
      patogumai: "Nera",
      status: "uzimta",
    },
    {
      pavadinimas: "Palata 3",
      apibūdinimas: "Triviete palata",
      kvadratūra: "9",
      vietos: "1",
      perviršis: "Taip",
      patogumai: "Yra",
      status: "reserved",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)} className="btn">
        Prideti palata
      </button>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />

      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
