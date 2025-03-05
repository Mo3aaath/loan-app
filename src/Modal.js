export default function Modal({ message, color, isOpen, onClose }) {
  if (!isOpen) return null; // prevent rendering when closed
  return (
    // overlay
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgb(255,255,255,0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onClick={onClose} 
    >
      {/* modal box*/}
      <div
        style={{
          backgroundColor: "gray",
          color:color
        }}
        onClick={(event) => event.stopPropagation()}
      >
        {message}
      </div>
    </div>
  );
}
