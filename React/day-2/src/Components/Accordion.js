import React, { useState } from "react";

function Accordion() {
    let [collapse, setCollapse] = useState(true);
    function collapseAccordion() {
        setCollapse(!collapse);
    }
    return (
        <div className="accordion container" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className={`accordion-button ${collapse ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => collapseAccordion()}
                    >
                        Section 1
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${collapse ? "show" : ""} `}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque rem minima facilis
                        maxime nulla hic magni optio laborum blanditiis ut! Consectetur iusto, earum dolorum
                        esse blanditiis beatae suscipit officia incidunt voluptate fugit atque doloribus
                        adipisci! Doloremque possimus neque ab voluptas!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
