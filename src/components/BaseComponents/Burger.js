import React from "react";
export const Burger = (props) => {
  return <>
   <section className="top-nav">
    <div className="top-logo" onClick={() => props.exit()}>
      SUPERSTARTED
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
    </label>
      <ul className="menu">
        <li>Member Login</li>
        <li>Sign Up</li>
      </ul>
    </section>
  </>
}

export default Burger;