import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div
      style={{ backgroundColor: "#19043d", width: "100vw", height: "100vh" }}
      className="App"
    >
      <div
        style={{
          backgroundColor: "#4b10b0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <h3 style={{ color: "white" }}>Requesting a Loan</h3>
        <hr></hr>

        <label>Name</label>
        <input></input>
        <label>Phone Number</label>
        <input></input>
        <label>Age</label>
        <input></input>
        <label>Are you an employee?</label>
        <input></input>
        <label>Salary</label>
        <input></input>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
