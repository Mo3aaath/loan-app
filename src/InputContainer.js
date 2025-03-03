export default function InputContainer({ label, type, onChange, value, name }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", paddingBottom: "10px"}}>
      <label style={{ color: "white" }}>{label}</label>
      <input type={type} onChange={onChange} value={value} name={name}></input>
    </div>
  );
}
