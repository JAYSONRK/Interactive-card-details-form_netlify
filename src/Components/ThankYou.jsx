import React from "react";
import Completed from '../images/icon-complete.svg'

const ThankYou = (prop) => {
    return (<>
        <section className="submitted">
            <article className="thankyou">
            <img src={Completed} alt="completed"/>
                <h2>Thank you!</h2>
                <p>We've added your card details</p>
                <button type="submit" onClick={prop.Return}>Continue</button>
            </article>   
        </section>
    </>)
}

export default ThankYou;