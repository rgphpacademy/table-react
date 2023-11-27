import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      pavadinimas: "",
      apibūdinimas: "",
      kvadratūra: "",
      vietos: "",
      perviršis: "",
      patogumai: "",
      status: "laisva",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (
      formState.pavadinimas &&
      formState.apibūdinimas &&
      formState.kvadratūra &&
      formState.vietos &&
      formState.perviršis &&
      formState.patogumai &&
      formState.status
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="pavadinimas">Pavadinimas</label>
            <input
              name="pavadinimas"
              onChange={handleChange}
              value={formState.pavadinimas}
            />
          </div>
          <div className="form-group">
            <label htmlFor="apibūdinimas">Apibūdinimas</label>
            <textarea
              name="apibūdinimas"
              onChange={handleChange}
              value={formState.apibūdinimas}
            />
          </div>
          <div className="form-group">
            <label htmlFor="kvadratūra">Kvadratūra</label>
            <input
              name="kvadratūra"
              onChange={handleChange}
              value={formState.kvadratūra}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vietos">Vietų kiekis</label>
            <input
              name="vietos"
              onChange={handleChange}
              value={formState.vietos}
            />
          </div>
          <div className="form-group">
            <label htmlFor="perviršis">Registracija</label>
            <input
              name="perviršis"
              onChange={handleChange}
              value={formState.perviršis}
            />
          </div>
          <div className="form-group">
            <label htmlFor="patogumai">Patogumai</label>
            <input
              name="patogumai"
              onChange={handleChange}
              value={formState.patogumai}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Būsena</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="live">Laisva</option>
              <option value="reserved">Rezervuota</option>
              <option value="draft">Uzimta</option>
            </select>
          </div>
          {errors && (
            <div className="error">{`Užpildykite laukelius: ${errors}`}</div>
          )}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
