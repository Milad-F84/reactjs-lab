import airBnbLogo from "./assets/img/airbnb 1.png";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={airBnbLogo} alt="" />
    </div>
  );
}