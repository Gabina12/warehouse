import React from "react";

const ProdSumm = ({ sum, title, total, ccy }) => {
  return (
    <div className="left-part">
      <h2 className="blue">
        <a draggable="false" href="" className="">
          {title}
        </a>
      </h2>
      <div className="drag-button" />
      <div className="hide-button" title="დამალვა" role="button" />
      <div className="clear" />
      <div aria-hidden="false" className="">
        <div>
          <div>
            <div label="სულ თანხა">
              <div className="product-total" ng-show="show" aria-hidden="false">
                <span>{total}:</span>
                <br />
                <span className="val">{sum}</span>
                <span className="smallfont">&nbsp; {ccy}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdSumm;
