import React, {useEffect,useState} from "react"
import {Link,useLocation,useNavigate} from "react-router-dom";
import "./Navbare.scss"

function Navbare(props) {

    const [active,setActive]=useState(false);
    const [open ,setOpen]=useState(false);
    const {pathname}=useLocation();

    const isactive =()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    return (
        <div>
            
        </div>
    );
}

export default Navbare;