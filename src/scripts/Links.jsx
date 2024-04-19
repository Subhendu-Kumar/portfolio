import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";

const links = [
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/subhendu-kumar-dutta/",
        icon: <IoLogoLinkedin className="hover:text-green-400" />,
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/Subhendu_330/",
        icon: <FaSquareXTwitter className="hover:text-green-400" />,
      },
      {
        platform: "GitHub",
        url: "https://github.com/Subhendu-Kumar/",
        icon: <FaGithubSquare className="hover:text-green-400" />,
      },
      {
        platform: "Instagram",
        url: "https://www.example.com/",
        icon: <FaInstagramSquare className="hover:text-green-400" />,
      },
];

export default links;