import React from 'react'
import "../../assests/css/roomadd.css"
function RoomAdd() {
    return (
        <div  className="roomArrange">
                        <div className="roomBookDateInnerFirst">Room1</div>
                        <div className="roomAdult">
                            <div className="roomAdultHead">Adults</div>
                            <div>
                            <div className="value-button" id="decrease1" onClick={()=>{var value = parseInt(document.getElementById('number').value, 10);value = isNaN(value) ? 0 : value;if(value<=1) value=1;   else value--; document.getElementById('number').value = value;}} value="Decrease Value">-</div>
                            <input type="number" id="number" defaultValue="1"/>
                            <div className="value-button" id="increase1" onClick={()=>{ console.log(document.getElementById('number')); var value = parseInt(document.getElementById('number').value, 10);value = isNaN(value) ? 0 : value; if(value>=2)value=2;else {value++;}document.getElementById('number').value = value;}} value="Increase Value">+</div>
                            </div>
                        </div>
                        <div className="roomChild">
                            <div className="roomChildHead">Childs(0-12)</div>
                            <div>
                            <div className="value-button" id="decrease" onClick={()=>{var value = parseInt(document.getElementById('number1').value, 10);value = isNaN(value) ? 0 : value;if(value<=0) value=0;   else value--; document.getElementById('number1').value = value;}} value="Decrease Value">-</div>
                            <input type="number" id="number1" defaultValue="0"/>
                            <div className="value-button" id="increase" onClick={()=>{ console.log(document.getElementById('number1')); var value = parseInt(document.getElementById('number1').value, 10);value = isNaN(value) ? 0 : value;if(value>=5)value=5;else {value++;}document.getElementById('number1').value = value;}} value="Increase Value">+</div>
                            </div>
                        </div>
        </div>
    )
}

export default RoomAdd
