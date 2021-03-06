import React ,{useEffect}from 'react'
import {useState} from 'react'
import "../../assests/css/roomslayout.css"
import sroom from "../../assests/imgs/rooms/IMG-20210130-WA0027.jpg"
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HotWater from "../../assests/icons/hotwater.svg"
import Wifi from "../../assests/icons/wifi.svg"
import Wardrobe from "../../assests/icons/wardrobe.svg"
import Tv from "../../assests/icons/tv.svg"
import Breakfast from "../../assests/icons/breakfast.svg"
import Tea from "../../assests/icons/tea.svg"
import Time from "../../assests/icons/time.svg"

function Roomlayout({key,details}) {
    var [detail,setDetail]=useState("");
    const [roomdetails,setRoomDetails]=useState({
        roomType:"dummy",
        roomArea:"100",
        roomPrice:"9999",
        roomDescription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't",
        adultsAllowed:"0"
    });
    useEffect(()=>{
        setDetail(details)
    },[details])

    useEffect(() => {
        console.log(detail)
        const obj = {
            roomType:detail.roomType,
            roomArea:detail.roomSize,
            roomPrice:detail.roomPrice,
            roomDescription:detail.roomDescription,
            adultsAllowed:detail.adultsAllowed
        }
        setRoomDetails(obj);
    }, [detail])
    return (
        <div className="lrooms">
            <div className="lroomsfirst">
                <img src={sroom}/>
                <div className="lroomType">
                    <div className="lroomName">{roomdetails.roomType}</div>
                    <div className="lroomIcon"><PersonOutlineIcon style={{fontsize:60}}/> <PersonOutlineIcon style={{fontsize:60}}/> </div>
                    <div className="lroomSizeOuter">Room Size: <span className="lroomSize">{roomdetails.roomArea}</span>sq. ft</div>
                </div>
                <div className="lroomPriceOuter">
                    From &nbsp;<span className="lroomPrice"> {roomdetails.roomPrice}</span>&nbsp;INR/night
                </div>
            </div>
            <div  className="lroomsecond">
                <div className="lroomContent">{roomdetails.roomDescription}</div>
                <div className="lroomsecHead">Ammenities</div>
                <div className="lroomContainer">
                    <div className="lroomListFirst">
                        <div><img src={Wifi}/>Free Wi-Fi</div>
                        <div><img src={HotWater}/>Hot water</div>
                        <div><img src={Wardrobe}/>Wardrobe</div>
                        <div><img src={Tv}/>Television</div>
                    </div>
                    <div className="lroomListSecond">
                        <div><img src={Breakfast}/>Breakfast included</div>
                        <div><img src={Tea}/>Tea and coffee maker</div>
                        <div><img src={Time}/>Time</div>
                    </div>
                    <div className="lroomListThird">
                        <button className="roombtn" onClick={()=>{window.location.href="/hotel/#/bookroom"}}>Book Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Roomlayout
