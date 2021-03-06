import React, { useEffect} from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Headers/Header'
import UpperHeader from '../../components/Headers/UpperHeader'
import Roomlayout from '../components/Roomlayout'
import "../../assests/css/rooms.css"
import axios from 'axios';
import {useState} from 'react'

function Rooms() {
    const [flag,setFlag]=useState("false")
    var obj={
        roomType:"dummy",
        roomArea:"100",
        roomPrice:"9999",
        roomDescription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't",
        adultsAllowed:"0"
    }
    var [items,setItems]=useState([]);
    const headers={
        headers:{
        'Content-Type': 'application/json'
        }
      }
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          axios.get('http://localhost:9759/api/room/allrooms',headers)
          .then((res)=>{
            var arr=[];
            // console.log(res.data)
            for(const i in res.data){
                // console.log(res.data[i])
                arr[i]=res.data[i];
            }
            setItems(arr)
            console.log(arr)
            console.log(items)
          })
          .catch((err)=>{
            console.log(err)
          })
        //   fetch("http://localhost:9759/api/room/allrooms", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }, [flag])
    return (
        <div>
            <UpperHeader/>
            <Header active="Rooms"/>
            <div className="roomsBegin">
          
            {/* {items.map(i=>( */}
            {/* <Roomlayout key={i.roomId} details={i}/> */}
            {/* ))} */}
       
            <Roomlayout details={obj}/>
            {/* <Roomlayout/>
            <Roomlayout/>
            <Roomlayout/> */}
            </div>
            <Footer/>
            
            
        </div>
    )
}

export default Rooms;
