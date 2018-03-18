import React from "react";

const UnitItem = ({ unit }) => {
  return (
    <li className="animated-item-slide-reversed" key={unit.id}>
      <div>
        <div className="list-block listPrimeText fblock65 visiblei">
          <div className="fb-row">
            <div className="fblock70 pl-10">
              <div className="list-prime-text-content fcaps">
                <span className="name">{unit.name}</span>
              </div>
              <span className="list-prime-text-content">
              {unit.descrip}
              </span>
            </div>
            <div className="fblock10 error-hint-dash-1" />
          </div>
        </div>
        <div className="fblock30 list-block listText">
          {/* <span>
            <span>
              <span className="val">{prod.priceGrow}</span>
              <span className="smallfont">&nbsp;₾</span>
            </span>
          </span> */}
        </div>
        <div className="fblock5 list-block listArr" />
        <div className="clear" />
      </div>
    </li>
  );
};
export default UnitItem;
