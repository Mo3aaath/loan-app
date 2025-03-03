import logo from "./logo.svg";
import "./App.css";
import LoanForm from "./LoanForm"

function App() {
  return (
    <div
      style={{ backgroundColor: "#19043d", width: "100vw", height: "100vh", display:"flex", alignItems:"center", justifyContent: "center" }}
      className="App"
    >
      <LoanForm />
    </div>
  );
}

export default App;
