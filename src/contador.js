import react, { useState } from "react";
import PropTypes from "prop-types";

const Contador = ({ propNum }) => {
  const [cuenta, setCuenta] = useState(propNum);

  return (
    <>
      <h1>Hola Soy Contador Santiago</h1>
      <h2>Hola soy Santiago</h2>
      <h3>{cuenta}</h3>
      <button onClick={() => setCuenta(cuenta + 1)}> ¡Más!</button>
      <button onClick={() => setCuenta(cuenta - 1)}> ¡Menos!</button>
      <br />
      <br />
      <button onClick={() => setCuenta(propNum)}> ¡Reset!</button>
    </>
  );
};

Contador.propTypes = {
  propNum: PropTypes.number.isRequired,
};

export default Contador;
