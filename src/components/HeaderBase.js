import Burger from "./BaseComponents/Burger";
import React from "react";
export const HeaderBase = (props) => {
  return <>
    <div className='header-base'>
      <div className='header-base-wrapper'>
        <Burger exit={props.exitPage}/>
      </div>
    </div>
  </>
}

export default HeaderBase;