import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
export default Button;
