import React from "react";

const ListItem = ({ prod }) => {
  return (
    <li className="animated-item-slide-reversed" key={prod.id}>
      <div>
        <div className="list-block listPrimeText fblock65 visiblei">
          <div className="fb-row">
            <div className="fblock70 pl-10">
              <div className="list-prime-text-content fcaps">
                <span className="name">{prod.title}</span>
              </div>
              <span className="list-prime-text-content">
                სულ: {prod.priceGrow * prod.count}
                <span className="smallfont">&nbsp;₾</span> / რაოდენობა:{" "}
                {prod.count} {prod.unit.name}
              </span>
            </div>
            <div className="fblock10 error-hint-dash-1" />
          </div>
        </div>
        <div className="fblock30 list-block listText">
          <span>
            <span>
              <span className="val">{prod.priceGrow}</span>
              <span className="smallfont">&nbsp;₾</span>
            </span>
          </span>
        </div>
        <div className="fblock5 list-block listArr" />
        <div className="clear" />
      </div>
    </li>
  );
};
export default ListItem;
