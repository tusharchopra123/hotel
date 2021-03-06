import React from 'react'
import Icon from "../../assests/icons/roombook.svg"
import "../../assests/css/roombooksecondcontainer.css"
import Gpay from "../../assests/icons/google-pay-primary-logo.svg"
import Visa from "../../assests/icons/visa.svg"
import MasterCars from "../../assests/icons/mastercard.svg"
import Paytm from "../../assests/icons/paytm.svg"
import Bhim from "../../assests/icons/bhim-upi.svg"
import Credit from "../../assests/icons/credit-card.svg"
import Phonepe from "../../assests/icons/phonepe-seeklogo.com.svg"
function RoomBookSecondContainer() {
    return (
             <div className="roomBookSecondContainer">
                <div className="roomBookSecondContainerFirst">
                    <div className="roomBookSecondContainerOuter">
                        <input className="roomBookSecondInput roomBookSecondName" type="text" placeholder="Name"/>
                        <input className="roomBookSecondInput roomBookSecondEmail"type="text" placeholder="Email"/>
                        <input className="roomBookSecondInput roomBookSecondPhone"type="text" placeholder="Phone Number"/>
                        <input className="roomBookSecondInput"type="text" placeholder="Name Guest 2"/>
                        <input className="roomBookSecondInput"type="text" placeholder="Name Guest 3"/>
                        <input className="roomBookSecondInput"type="text" placeholder="Name Guest 4"/>
                        <div className="roomBookSecondTotalBox">
                            <div className="roomBookSecondTotalBoxFirst">
                                <img src={Icon}/>
                            </div>
                            <div className="roomBookSecondTotalBoxSecond">
                                <div className="roomBookSecondTotalBoxSecondFirst">
                                    <div className="roomBookFirstSecond">
                                    <div>Stay Everyday with Breakfast</div><div>INR 12000  </div>                                     
                                    </div>
                                    <div className="roomBookFirstThird">
                                    <div>Sub Total</div><div>INR 12000  </div>
                                    </div>
                                    <div className="roomBookFirstFourth">
                                    <div>Tax & Fees</div><div>INR 1440  </div>
                                    </div>
                                </div>
                                <div className="roomBookSecondTotalBoxSecondSecond">
                                    <div className="roomBookFirstFifth"><div>Grand total</div> <div>INR 13440  </div></div>
                                   
                                </div>
                            </div>
                        </div>
                        <button className="payNowBtn">Pay Now</button>
                    </div>
                    <div className="roomBookSecondContainerSecond">
                        <div className="roomBookSecondContent">You need to show a valid government ID proof upon arriving to the hotel </div>
                        <div>
                            <div className="roomBookSecondCheckIn">
                                <div className="roomBookSecondCheckInFirst">
                                    <div>Check In</div>
                                    <div>28 Feb ‘21, Sun</div>
                                </div>
                                <div className="roomBookSecondCheckInSecond">
                                    <div>Check Out</div>
                                    <div>2 Mar ‘21, Tue</div>
                                </div>
                            </div>
                            <div className="roomBookSecondFacilities">
                                <div className="roomBookSecondFacilitiesFirst">
                                    <div>No of Nights</div>
                                    <div>Room</div>
                                    <div>Guests</div>
                                </div>
                                <div className="roomBookSecondFacilitiesSecond">
                                    <div>3 Nights</div>
                                    <div>Standard</div>
                                    <div>2 Adults, 2 Children</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="paymentsMethods">
                <img src={Gpay} /> 
                <img src={Visa} /> 
                <img src={MasterCars} /> 
                <img src={Paytm} /> 
                <img src={Bhim} /> 
                <img src={Credit} /> 
                <img src={Phonepe} /> 
                </div>
            </div>

    )
}

export default RoomBookSecondContainer
