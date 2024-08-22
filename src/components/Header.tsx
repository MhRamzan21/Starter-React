import logo from "assets/logo.png";
import Navbar from "./Navbar";
type Props = {};

const Header = ({}: Props) => {
  return (
    <div className="w-full flex justify-between items-center">
      <img src={logo} alt="logo" className="h-12" />
      <Navbar />
    </div>
  );
};

export default Header;
