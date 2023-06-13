import React, { useState } from 'react'
import '../src/Cardform.css';
import Cardfront from './Cardfront';
import Cardback from './Cardback';


function Cardform() {

    const [valid, setValid] = useState(false);
    const [reset, setReset] = useState(false)
    const [inputs, setInputs] = useState({
        cardholdername: "",
        cardholdernumber: "",
        month: "",
        year: "",
        cvc: ""
    });

    const [error, setError] = useState(false);
    const handleChange = (event) => {
        // const re = /^[0-9\b]+$/;
        const name = event.target.name;
        const value = event.target.value;

        // if (event.target.value === '' || re.test(event.target.value)) {
        //     setInputs(values => ({ ...values, [name]: value.toUpperCase() }))
        // }
        setInputs(values => ({ ...values, [name]: value.toUpperCase() }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        validateform()
        console.log("submit")
        setReset(true);
        handlereset()
    }


    // if (!error) {
    //     console.log(inputs)
    //     setValid(true)
    //     console.log("on o error print data card")
    // }


    function handlereset() {
        setReset(false);
    }

    function validateform() {

        if (inputs.cardholdername.length === 0 || inputs.cardholdernumber.length === 0 || inputs.month.length === 0 || inputs.year.length === 0 || inputs.cvc.length === 0 || inputs.cardholdername.length >= 30 || inputs.cardholdernumber.length < 19 || inputs.cvc.length < 3 || inputs.month.length < 2 || inputs.year.length < 2 || !inputs.cvc.match(/^[0-9]+$/) || !inputs.cardholdernumber.match(/^[0-9\s]*$/) || !inputs.month.match(/^[0-9]+$/) || !inputs.year.match(/^[0-9]+$/)) {
            setError(true);
            console.log("validate if statement")
        }
        else {
            setError(false)
            console.log("validate else statement")
            console.log(inputs)
            setValid(true)
        }

    }

    return (
        <>
            <div className='card'>{valid && <Cardfront data={reset && inputs} />}</div>
            <div className='cardback-face'>{valid && <Cardback cvc={inputs.cvc} />}</div>
            <main>
                <div className='img'>
                </div>
                <div className='rightsection'>
                    <form action="" >
                        <div >
                            {/*card name */}
                            <div className='card-n'>
                                <label htmlFor="">CARDHOLDER NAME</label>
                                <input type="text" required placeholder='e.g. Jane Appleseed' name="cardholdername" value={inputs.cardholdername} onChange={handleChange} />
                                <p className='error'>{error && inputs.cardholdername.length <= 0 ? "Cardholder name required" : error && inputs.cardholdername.length >= 30 ? "card number max character 30" : ""}</p>
                            </div>
                        </div>
                        <div >
                            {/*card number */}
                            <div className='card-n'>
                                <label htmlFor="">CARD NUMBER</label>
                                <input type='tel' placeholder='e.g. 1234 5678 9123 0000' name="cardholdernumber" value={inputs.cardholdernumber} onChange={handleChange} minLength="16" maxLength="19" required />
                                <p className='error'>{error && inputs.cardholdernumber.length <= 0 ? "Card number required" : error && !inputs.cardholdernumber.match(/^[0-9\s]*$/) ? "Cardnumber must be numeric" : error && inputs.cardholdernumber.length < 19 ? "Card number must be 16 digit" : ""}</p>
                            </div>
                        </div>
                        <div className='expiry'>
                            <div >
                                {/*expiry date */}
                                <div className='crd-date'>
                                    <label htmlFor="">EXP.DATE (MM/YY)</label>
                                    <input type="text" pattern="^[0-9\b]+$" placeholder='MM' name="month" value={inputs.month} onChange={handleChange} minLength="2" maxLength="2" required />
                                    <input type="text" pattern="^[0-9\b]+$" placeholder='YY' name="year" value={inputs.year} onChange={handleChange} minLength="2" maxLength="2" required />
                                    <p className='error'>{error && inputs.month.length <= 0 ? "Expiry required" : error && inputs.year.length <= 0 ? "Expiry required" : error && !inputs.month.match(/^[0-9]+$/) ? "expiry must be numeric" : error && !inputs.year.match(/^[0-9]+$/) ? "expiry must be numeric" : error && inputs.month.length < 2 ? "Fill expiry" : error && inputs.year.length < 2 ? "Fill expiry" : ""}</p>
                                </div>
                            </div>
                            <div >
                                {/*cvc*/}
                                <div className='crd-cvc'>
                                    <label htmlFor="">CVC</label>
                                    <input type="text" pattern="^[0-9\b]+$" placeholder='e.g. 123' name="cvc" value={inputs.cvc} onChange={handleChange} minLength="3" maxLength="3" required />
                                    <p className='error'>{error && inputs.cvc.length <= 0 ? "CVC required" : error && !inputs.cvc.match(/^[0-9]+$/) ? "CVC must be numeric" : error && inputs.cvc.length < 3 ? "CVC must be 3 digit" : ""}</p>
                                </div>
                            </div>
                        </div>
                        <div className='btn-cnf'>
                            <button onClick={handleSubmit} >Confirm</button>
                        </div>
                    </form>
                </div>

            </main>

        </>
    )
}

export default Cardform