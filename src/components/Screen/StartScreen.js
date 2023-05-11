import React from 'react';

export const StartScreen = (props) => {

  return <>
    <div className='become-a-superstar__wrapper'>
        <div className='become-a-superstar__container'>
          <div className="become-a-superstar">
            <div className="become-a-superstar__title">
              <h1 className="become-a-superstar__title-text">
                Become 
                <br/>
                a superstar
              </h1>
            </div>
            <div className="become-a-superstar__description">
              <p className="become-a-superstar__text">
                Become a movie star or a model. Get access to casting calls, 400+ talent agencies and acting course.
              </p>
            </div>
            <div className="become-a-superstar__button">
              <button className="classic-button" onClick={() => props.enterSignIn()}>
                JOIN FOR FREE
              </button>
            </div>
          </div>
      </div>
    </div>
  </>
}

export default StartScreen;