import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = (props) => {
  return (
    <div className="text-center bg-purple-900 p-10 text-white sticky h-60 bottom-0 grid content-center">
      <Link
        className="text-white px-4 my-1 text-lg bg-purple-900 bg-opacity-70 transform-gpu"
        to={`/`}
      >
        <StaticImage
          src="../images/icon.png"
          width={120}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          layout="constrained"
        />
      </Link>
    </div>
  );
};

export default Footer;
