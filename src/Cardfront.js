import React from 'react'
import '../src/Cardfront.css';
import Ellipse1 from '../src/image/Ellipse1.png';
import Ellipse2 from '../src/image/Ellipse2.png';


function Cardfront({ data }) {
    return (
        <>

            <div className='Ellipse'>
                <img src={Ellipse1} alt="" />
                <img src={Ellipse2} alt="" style={{ marginLeft: "20px" }} />
            </div>

            <p className='discardnum'>{data.cardholdernumber}</p>
            <div className='card-bottom'>
                <p>{data?.cardholdername}</p>
                <p>{data?.month}/{data?.year}</p>
            </div>

        </>
    )
}

export default Cardfront