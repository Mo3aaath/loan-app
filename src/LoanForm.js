import InputContainer from "./InputContainer";

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
          <InputContainer label={"Name"} type={"text"} />
          <InputContainer label={"Phone Number"} type={"number"} />
          <InputContainer label={"Age"} type={"number"} />
          <InputContainer label={"Are you an employee?"} type={"checkbox"} />
          <InputContainer label={"Salary"} type={"number"} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
