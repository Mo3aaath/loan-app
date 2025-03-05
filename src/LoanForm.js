import InputContainer from "./InputContainer";
import { useState } from "react";
import Modal from "./Modal";
export default function LoanForm() {
  // user input state
  const [userInput, setUserInput] = useState({
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: 0,
  });

  // modal open state
  const [isOpen, setIsOpen] = useState(false);

  // modal message state
  const [modalContent, setModalContent] = useState({ message: "", color: "" });

  // submit button disabler
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

  // input change handler
  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;

    setUserInput((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // submit button handler
  function handleSubmitClick(event) {
    event.preventDefault(); //prevent page refresh
    // phone number regex
    let phoneRegex = /^(?:\+?966|966|0)?5\d{8}$/;

    // if phone number is invalid
    if (!phoneRegex.test(userInput.phone))
      setModalContent({ message: "Invalid phone number", color: "red" });
    // if age is in invalid range
    else if (!(userInput.age > 18 && userInput.age < 100))
      setModalContent({ message: "Invalid Age", color: "red" });
    // if input is valid
    else {
      setModalContent({ message: "Success!", color: "green" });
    }
    setIsOpen(true);
  }

  return (
    <div
      style={{
        backgroundColor: "#4b10b0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
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
            type={"text"}
            value={userInput.name}
            name="name"
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
            name="salary"
            onChange={(e) => {
              handleInputChange(e);
            }}
          >
            <option value={0}>Less than $500</option>
            <option value={1}>Above $500</option>
          </select>
          <button
            type="submit"
            disabled={isDisabled()}
            onClick={handleSubmitClick}
          >
            Submit
          </button>
        </div>
      </form>

      {/* modal that appears when submitting the form */}
      <Modal
        message={modalContent.message}
        color={modalContent.color}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
