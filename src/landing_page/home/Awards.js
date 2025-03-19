import React from 'react'

function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className="col-6 p-5">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha clients contibute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Future and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="media/images/pressLogos.png" alt="" style={{width:"70%"}} className='mx-auto'/>
            </div>
        </div>
    );
}

export default Awards;