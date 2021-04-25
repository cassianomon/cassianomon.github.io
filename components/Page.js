import PropTypes from "prop-types";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
