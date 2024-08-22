import logo from "assets/logo.png";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-col items-center w-full">
        <img src={logo} alt="logo" className="mb-8 h-14" />
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex items-center gap-8">
            <FaFacebookF />
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
            <RiInstagramFill />
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-base font-normal leading-7 text-center text-grey-700">
            &#169; 2024 Footer Creation. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
