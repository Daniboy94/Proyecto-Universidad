/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Title.css";
//pasamos los pros subtitle y title por parametro, para reutilizar los titulos
const Title = ({ subTitle, title }) => {
  return (
    <div className="title">
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
