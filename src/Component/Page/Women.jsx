import React, { useState } from "react";
import "./page Style/woman.css";


import slieder3 from "../Asset/model-24481_640.png";
import WomanCategory from "../Asset/woman";
import Item from "../item/Item";
const Women = () => {
  const [range, setrange] = useState(0);
  const [inputs, setInputs] = useState("");

  const QueryHandler = (e) => {
    setInputs(e.target.value);
  };

  let result = WomanCategory.filter(
    (data) =>
      data.title.toLocaleLowerCase().indexOf(inputs.toLocaleLowerCase()) !== -1
  );

  return (
    <div className="woman">
      <div className="woman__contener">
        <div className="woman__right__contener">
          <div className="woman__baner">
            <div className="woman__baner__logo">
              <h1>
                <span>AYU </span>Woman Choffon Dress
              </h1>
              <img className="shofoneLogo" src={slieder3} alt="image" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
