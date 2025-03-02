export default function LoanForm() {
  return (
    <div
      style={{
        backgroundColor: "#4b10b0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <form>
        <h3 style={{ color: "white" }}>Requesting a Loan</h3>
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
      </form>
    </div>
  );
}
