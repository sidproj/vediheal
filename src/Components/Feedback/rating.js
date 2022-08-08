import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function rating() {
  return (
    <div>
      <FontAwesomeIcon icon={faStar} height="20px" />
      <FontAwesomeIcon icon={faStar} height="20px" />
      <FontAwesomeIcon icon={faStar} height="20px" />
      <FontAwesomeIcon icon={faStar} height="20px" />
      <FontAwesomeIcon icon={faStar} height="20px" />
    </div>
  );
}

export default rating;
