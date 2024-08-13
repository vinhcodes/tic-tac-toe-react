const style = {
  fontSize: "30px",
  fontWeight: "800",
  cursor: "pointer",
  outline: "none",
};

export const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick} className="square">
    {value}
  </button>
);
