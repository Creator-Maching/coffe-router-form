import img from "../assets/images/Coffe_mage.png"

const imgStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "20%",
} as const;

const headerStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
  marginBottom: "20px",
} as const;

export function Header() {
  return (
    <header style={headerStyle}>
      <img src={img} alt="Coffee Mage" width="150" style={imgStyle} />
      <h1>Seeking a Mage or Warlock</h1>
    </header>
  );
}