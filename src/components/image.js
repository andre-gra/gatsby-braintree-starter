import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const Image = ({ image, className, alt }) => {
  return (
    <GatsbyImage alt={alt} className={className} image={getImage(image)} />
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Image;
