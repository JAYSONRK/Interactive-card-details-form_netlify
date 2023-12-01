import React from "react";
import Logo from '../images/card-logo.svg';

const CardFormat = (inputs) => {
    return (<>
        <section className="card-format">
            <picture>
                <div className="card-back">
                    <div className="info-cvc">
                        <p>{inputs.cvc}</p>      
                    </div>
                </div> 
                
                <div className="card-front">
                    <div className="logo">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="info-number">
                        <h5>{inputs.number}</h5>
                    </div>
                    <div className="info">
                        <div className="info-name">
                            <p>{inputs.name}</p>
                        </div>
                        <div className="info-date">
                        {inputs.month || inputs.year ? <p>{inputs.month}/{inputs.year}</p>: null}
                        </div>
                    </div>
                </div>
            </picture>
        </section>
    </>)
}

export default CardFormat;