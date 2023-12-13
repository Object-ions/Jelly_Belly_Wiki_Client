import React, { useEffect, useState } from "react";

const DisplayBean = () => {
  useEffect(() => {
    fetchBeans();
  }, []);

  const fetchBeans = () => {
    fetch("https://localhost:5001/api/Beans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return <div>DisplayBean</div>;
};

export default DisplayBean;
