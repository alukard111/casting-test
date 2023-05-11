import React from "react";
import star from '../image/PNG/star.png'
import rupor from '../image/PNG/rupor.png'
import rocket from '../image/PNG/rocket.png'
import money from '../image/PNG/money.png'


export const SecondBlock = (props) => {
  
  return <>
    <div className="second-block__wrapper">
      <div className="second-block">
        <ul className="second-block__list">
          <li className="second-block__item">
            <img className="second-block__img" alt='img' src={star} />
            <span className="second-block__item-text star">
            Access new casting calls every day
            </span>
          </li>
          <li className="second-block__item">
            <img className="second-block__img" alt='img' src={rupor} />
            <span className="second-block__item-text rupor">
            400+ talent agencies waiting for you
            </span>
          </li>
          <li className="second-block__item">
            <img className="second-block__img" alt='img' src={rocket} />
            <span className="second-block__item-text rocket">
            40 steps to becoming an actor or a model
            </span>
          </li>
          <li className="second-block__item">
            <img className="second-block__img" alt='img' src={money} />
            <span className="second-block__item-text money">
            Get Paid From $200+ a day per role
            </span>
          </li>
        </ul>
      </div>
    </div>
  </>
}

export default SecondBlock;