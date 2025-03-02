export default function InputContainer({ label, type }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "10px"}}>
      <label style={{ color: "white" }}>{label}</label>
      <input type={type}></input>
    </div>
  );
}
