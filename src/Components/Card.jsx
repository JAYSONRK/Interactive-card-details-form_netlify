import React, { useState } from "react";
import CardFormat from "./CardFormat";
import CardDetails from "./CardDetails";
import ThankYou from "./ThankYou";

const Card = () => {
    const [inputs, setInputs] = useState({});
    const [submitData, setSubmitData] = useState(false);
    const cardInputs = (data) => {
        setInputs(data);
        if (Object.keys(data).length !== 0) {
        setSubmitData(!submitData);
        }
    }

    const goBack = () => {
        setSubmitData(!submitData)
    }
    return (<>
        <div className="card">
           <CardFormat
            name = {inputs.fname}
            number = {inputs.cnumber}
            month = {inputs.month}
            year= {inputs.year}
            cvc = {inputs.cvc}
           />
           {!submitData && <CardDetails
            cardDetails = {cardInputs}
           />}
           {submitData && <ThankYou
            Return= {goBack}
           />}
        </div>
    </>)
}

export default Card;