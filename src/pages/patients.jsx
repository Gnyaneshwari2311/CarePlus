import { useReducer, useState } from "react";

const initialPatients = [
  {
    id: 1,
    name: "Gnyaneshwari",
    age: 24,
    city: "Bangalore",
  },
  {
    id: 2,
    name: "Priya",
    age: 26,
    city: "Pune",
  },
];

function reducer(state, action) {
  if (action.type === "ADD") {
    return [...state, action.patient];
  }

  if (action.type === "DELETE") {
    return state.filter((patient) => patient.id !== action.id);
  }

  if (action.type === "UPDATE") {
    return state.map((patient) =>
      patient.id === action.patient.id ? action.patient : patient
    );
  }

  return state;
}

function Patients() {
  const [patients, dispatch] = useReducer(reducer, initialPatients);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const [editId, setEditId] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || age === "" || city.trim() === "") {
      alert("Please enter all patient details");
      return;
    }

    const patient = {
      id: editId || Date.now(),
      name: name,
      age: age,
      city: city,
    };

    if (editId) {
      dispatch({
        type: "UPDATE",
        patient: patient,
      });
    } else {
      dispatch({
        type: "ADD",
        patient: patient,
      });
    }

    setName("");
    setAge("");
    setCity("");
    setEditId(null);
  }

  function handleEdit(patient) {
    setEditId(patient.id);
    setName(patient.name);
    setAge(patient.age);
    setCity(patient.city);
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE",
      id: id,
    });
  }

  return (
    <div className="patient-page">

      {/* HEADER */}

      <div className="patient-page-header">
        <p>PATIENT MANAGEMENT</p>

        <h1>Patients</h1>

        <span>
          Manage patient information easily and efficiently
        </span>
      </div>

      {/* CONTENT */}

      <div className="patient-content">

        {/* FORM */}

        <div className="patient-form-box">

          <h2>
            {editId ? "Update Patient" : "Add New Patient"}
          </h2>

          <p className="form-description">
            Enter the patient details below
          </p>

          <form onSubmit={handleSubmit}>

            <div className="patient-form">

              <input
                type="text"
                placeholder="Patient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <button type="submit">
                {editId ? "Update" : "Add Patient"}
              </button>

            </div>

          </form>
        </div>

        {/* LIST */}

        <div className="patient-list">

          <div className="patient-list-header">
            <div>
              <h2>Patient List</h2>
              <p>{patients.length} registered patients</p>
            </div>
          </div>

          <div className="patient-cards">

            {patients.map((patient) => (

              <div className="patient-card-box" key={patient.id}>

                <div className="patient-card-header">

                  <div className="patient-letter">
                    {patient.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{patient.name}</h3>
                    <span>Patient</span>
                  </div>

                </div>

                <div className="patient-card-details">

                  <div>
                    <small>AGE</small>
                    <strong>{patient.age} years</strong>
                  </div>

                  <div>
                    <small>CITY</small>
                    <strong>{patient.city}</strong>
                  </div>

                </div>

                <div className="patient-card-buttons">

                  <button
                    className="patient-edit"
                    onClick={() => handleEdit(patient)}
                  >
                    Edit
                  </button>

                  <button
                    className="patient-delete"
                    onClick={() => handleDelete(patient.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Patients;