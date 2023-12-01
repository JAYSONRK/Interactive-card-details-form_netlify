import React, { useState } from "react";

const CardDetails = (prop) => {
    const [details, setDetails] = useState({
        fname: '',
        cnumber: '',
        month: '',
        year: '',
        cvc: ''
    });
    const [inputError, setInputError] = useState({});

    const inputDetail = (event) => {
        const {name, value} = event.target;
        setDetails((prev) => {
            return {...details,
                [name]: value}     
        })
    }

    const submitDetails = (event) => {
        event.preventDefault();
        const error = {};
        let regex = /^[A-Za-z]+$/;
        if (!details.fname) {
            error.fname = "Can't be blank";
    } else if (!regex.test(details.fname.replace(/\s/g, ""))) {
            error.fname = "Wrong format, charecters only"
    }

        if (!details.cnumber) {
            error.cnumber = "Can't be blank";
    } else if (isNaN(details.cnumber.replace(/\s/g, "")) || parseInt(details.cnumber) < 0) {
            error.cnumber= "Wrong format, number only";
    } else if (details.cnumber.toString().length !== 19 || details.cnumber.replace(/\s/g, "").toString().length !== 16) {
        error.cnumber= "Wrong format";
    }
    
        if (!details.month || !details.year) {
            error.date = "Can't be blank";
    } else if (details.month < 0 || (details.month-1) > new Date().getMonth()) {
        error.date = "Wrong format"
    } else if (details.year < 0 || details.year > new Date().getFullYear()) {
        error.date = "Wrong format"
    }

        if (!details.cvc) {
            error.cvc = "Can't be blank";
    } else if (details.cvc < 100 || details.cvc > 999) {
        error.cvc = "Wrong format"
    }

     setInputError(error);
     const data = (Object.keys(error).length === 0) ? details : {};
     prop.cardDetails(data)
}
    return (<>
            <section className="card-detail">
                <form onSubmit={submitDetails}>
                    <div  className="card-holder-name">
                        <label>Cardholder Name</label>
                        <input name="fname" type="text" placeholder="e.g. Jane Appleseed" value={details.fname} onChange={inputDetail} style={inputError.fname && {border : '1px solid hsl(0, 100%, 66%)'}}/>
                        {inputError.fname && <div className="error">{inputError.fname}</div>}
                    </div>
                    <div  className="card-number">
                        <label>Card Number</label>
                        <input name="cnumber" type="text" placeholder="e.g. 1234 5678 9123 0000"  value={details.cnumber} onChange={inputDetail} style={inputError.cnumber && {border : '1px solid hsl(0, 100%, 66%)'}} />
                        {inputError.cnumber && <div className="error">{inputError.cnumber}</div>}
                    </div>
                    <div  className="date-cvc">
                        <div className="month-year">
                            <label>Exp. Date (MM/YY)</label>
                            <input name="month" type="number" placeholder="MM" value={details.month} onChange={inputDetail} style={inputError.date && {border : '1px solid hsl(0, 100%, 66%)'}}/>
                            <input name="year" type="number" placeholder="YY" value={details.year} onChange={inputDetail} style={inputError.date && {border : '1px solid hsl(0, 100%, 66%)'}} />
                            {inputError.date && <div className="error">{inputError.date}</div>}
                        </div>
                        <div className="cvc">
                            <label>CVC</label>
                            <input name="cvc" type="number" placeholder="e.g. 123" value={details.cvc} onChange={inputDetail} style={inputError.cvc && {border : '1px solid hsl(0, 100%, 66%)'}}/>
                            {inputError.cvc && <div className="error">{inputError.cvc}</div>}
                        </div>
                    </div>
                    <div className="button">
                        <button type="submit">Confirm</button> 
                    </div>  
                </form>
            </section>
    </>)
}

export default CardDetails;