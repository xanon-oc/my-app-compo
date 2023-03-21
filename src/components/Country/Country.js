import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, population, name, flags } = props.country;
  // console.log(props.country);
  return (
    <div className="country">
      <h1>Country Name : {name.common}</h1>
      <img src={flags.png} alt="" />
      <p>
        <small>Region : {region}</small>
      </p>
      <p>
        <small>Area : {area}</small>
      </p>
      <p>
        <small>Population : {population}</small>
      </p>
    </div>
  );
};

export default Country;
