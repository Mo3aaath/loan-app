import InputContainer from "./InputContainer";
import { useState } from "react";
export default function LoanForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: 0,
  });

  let isDisabled = () => {
    if (
      userInput.name !== "" &&
      userInput.age !== "" &&
      userInput.phone !== ""
    ) {
      return false;
    }
    return true;
  };

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;

    setUserInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function handleSelectChange(event) {}

  return (
    <div
      style={{
        backgroundColor: "#4b10b0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "10px",
        padding: "20px",
        width: "60%",
      }}
    >
      <form>
        <h3 style={{ color: "white" }}>Requesting a Loan</h3>
        <hr></hr>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <InputContainer
            label={"Name"}
            name="name"
            type={"text"}
            value={userInput.name}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <InputContainer
            label={"Phone Number"}
            type={"number"}
            name="phone"
            value={userInput.phone}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <InputContainer
            label={"Age"}
            name="age"
            type={"number"}
            value={userInput.age}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <InputContainer
            label={"Are you an employee?"}
            name="isEmployee"
            type={"checkbox"}
            value={userInput.isEmployee}
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <label style={{ color: "white" }}>Salary</label>
          <select
            style={{ marginBottom: "20px" }}
            value={userInput.salary}
            onChange={(e) => {
              handleSelectChange(e);
            }}
          >
            <option>Less than $500</option>
            <option>Above $500</option>
          </select>
          <button type="submit" disabled={isDisabled()}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
