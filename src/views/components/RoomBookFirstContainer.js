import React from 'react'
import RoomAdd from './RoomAdd'
function RoomBookFirstContainer() {
    return (
             <div className="roomBookFirstContainer">
                <div className="roomBookDateOuter">
                    <div className="roomBookDateInner">
                        <div className="roomBookDateInnerFirst">From</div>
                        <div className="roomBookDateInnerSecond"><input type="Date"/></div>
                        <div className="roomBookDateInnerThird">To</div>
                        <div className="roomBookDateInnerFourth"><input type="Date"/></div>
                    </div>
                    <div className="roomAddition">
                        <RoomAdd/>
                    </div>
                    <div className="roomAddButton"><button>+Add another Room</button></div>
                    <div className="roomProceed">Proceed</div>
                </div>
                <div className="roomBookContact">Please contact the hotel for accomodation of more than 2 adults in one room. </div>
            </div>

    )
}

export default RoomBookFirstContainer
