import React from "react";
// PNG
import personeFirst from '../image/PNG/persone/00.png'
import personeSecond from '../image/PNG/persone/01.png'

export const SocialBlock = (props) => {

  return <>
    <div className="social-block__wrapper">
      <div className="social-block">
        <div className="social-block__title">
          <h2 className="title">
            What People Say
          </h2>
        </div>
        <div className="social-block__people people">
          <div className="people__say">
            <p className="people__say-text">
              I am so happy I joined Make Me Famous half a year ago. That was one of the best decisions in my life! In only few months I got my first role in a movie, and now I am switching to an actor career.
            </p>
          </div>
          <div className="people__persone">
            <div className="people__persone-photo">
              <img alt="persone-img" className="persone-img" src={personeFirst}/> 
            </div>
            <div className="people__persone-name">
              <h4 className="people__persone-name-text">
                Martin Smith <br/> former bartender
              </h4>
            </div>
          </div>
        </div>
        <div className="social-block__people people">
          <div className="people__say">
            <p className="people__say-text">
              I am so happy I joined Make Me Famous half a year ago. That was one of the best decisions in my life! In only few months I got my first role in a movie, and now I am switching to an actor career.
            </p>
          </div>
          <div className="people__persone">
            <div className="people__persone-photo">
              <img alt="persone-img" className="persone-img" src={personeSecond}/> 
            </div>
            <div className="people__persone-name">
              <h4 className="people__persone-name-text">
                Martin Smith <br/> former bartender
              </h4>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </>
};

export default SocialBlock;