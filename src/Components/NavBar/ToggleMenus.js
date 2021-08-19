import React, { useState } from 'react'
import DropDown from './DropDown'
import {FaSortDown} from 'react-icons/fa'

const ToggleMenus =({value})=>{

    const [show,setShow] = useState(false);

    if(!value){
        return null
    }

    const handleChange=()=>{
        setShow(!show)
    }

    return(
        <div className="container toggleMenus">
        <div className="row justify-content-center">
          <div className="col-6 offset-4 v-menu py-3">Home</div>
          <div className="col-6 offset-4 v-menu py-3">Contact</div>
          <div className="col-6 offset-4 v-menu py-3" onClick={handleChange}>Works<span><FaSortDown className="down-arrow"/></span></div>
          <DropDown value={show} />
        </div>
      </div>
    )
}

export default ToggleMenus;