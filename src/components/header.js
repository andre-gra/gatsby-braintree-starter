import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import CartPop from "./cartPop";

const Header = ({ siteTitle }) => {
  return (
    <header className="w-full relative z-20">
      <div className="bg-purple-900 h-12 md:h-20 flex justify-between">
        <Link className="text-white px-4 text-base md:text-xl my-auto" to="/">
          {siteTitle}
        </Link>
        <Link
          className="text-white px-4 text-base md:text-xl my-auto"
          to={`/playground`}
        >
          go to Braintree GraphQl playground page 🎡
        </Link>
        <CartPop className="my-auto px-4" />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
