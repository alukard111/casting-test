import React, { useEffect, useState } from "react";
import { flushSync } from 'react-dom'

// import { Swiper, SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';


import imgCardOne from '../image/PNG/card/00.png'
import imgCardTwo from '../image/PNG/card/01.png'
import imgCardThree from '../image/PNG/card/02.png'
// import arrowLeft from '../image/svg/arrow-left.svg'
// import arrowRight from '../image/svg/arrow-right.svg'
// import 'swiper/element/css/a11y';
import 'swiper/css/a11y'
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/scss/pagination';


export const SliderBlock = (props) => {
  // ЯКОРЯ КО КНОПКАМ
  // СЛАЙДЕР СВАЙП.
  const [transform, setTransform] = useState(0);
  // СЦЕНАРИЙ СЛАЙДЕРА - должен ходить по кругу
  // Измерить размер card со всеми отступами
  const [sliderStop, setSliderStop] = useState(true)
  // =========================================================
  // const [offsetWidthCard, setOffsetWidthCard] = useState();
  // const [offsetWidthCardsWrapper, setOffsetWidthCardsWrapper] = useState();
  const [el, setEl] = useState();
  const [cardsWrapper, setCardsWrapper] = useState();
  // =========================================================
  const [swipeStartX, setSwipeStartX] = useState(0)
  const [swipeMoveX, setSwipeMoveX] = useState(0)
  const [swipeEndX, setSwipeEndX] = useState(0)
  const [widthSwipe, setWidthSwipe] = useState(0)

  // ============================================================
  const [prevScrollLeft, setPrevScrollLeft] = useState()
  


  

  const swipeStart = (e) => {
    if (sliderStop && Boolean(cardsWrapper)) {
      let touchMove = null;
      [...e.changedTouches].forEach(touch => {
        setSwipeStartX(touch.pageX)
        setPrevScrollLeft(cardsWrapper.scrollLeft)
      })
      console.log(cardsWrapper.scrollLeft, ': start')
      
    }
  }

  const swipeMove = (e) => {
    [...e.changedTouches].forEach(touch => {
      if (Boolean(cardsWrapper) && prevScrollLeft !== undefined) {

        cardsWrapper.classList.add('dragging');
        let positionDiff = touch.pageX-swipeStartX
        cardsWrapper.scrollLeft = prevScrollLeft - positionDiff
        console.log('cardsWrapper', cardsWrapper.scrollLeft, prevScrollLeft - positionDiff)
      }

      // if (Boolean(swipeStartX !== 0)) {
      //   if (touch.pageX < swipeStartX) {
      //     console.log('pageX:\n', touch.pageX, '\nswipeStartX:\n', swipeStartX)
      //     flushSync(() => {
      //       setSwipeMoveX((swipeStartX - touch.pageX)+swipeMoveX)
      //     })
      //     const slider = document.querySelector('.slider')
      //     slider.scrollLeft += (swipeStartX - touch.pageX)+swipeMoveX
      //     console.log( swipeStartX,touch.pageX,swipeMoveX  , 'cardsWrappcardsWrapper.scrollLefter.scrollLeft')
      //   }
      //   if (touch.pageX > swipeStartX) 
      //   {
      //     flushSync(() => {
      //       setSwipeMoveX((swipeStartX - touch.pageX )+swipeMoveX)
      //     })
      //     document.querySelector('.slider').scrollLeft = Math.round((touch.pageX - swipeStartX))
  
      //   }
      // }

    })
  }

  // начало пути touchStart = touch.pageX
  // сколько пройдено пути? touchMove = touchStart - touchEnd
  // куда записывать перелистывание? 1 х 228
  // когда заканчивается перелистывание?
  // когда срабатывает перелистывание?

  // если прошел больше половины пути - 228 * (старое число/ширина слайда)
  const swipeEnd = (e) => {
    [...e.changedTouches].forEach(touch => {
      // 
      const elTouch = document.getElementById(touch.identifier)
      elTouch?.remove()
      // cardsWrapper.scrollLeft
      // cardsWrapper?.classList.remove('dragging');
      // //
      // if (touch.pageX < swipeStartX && sliderStop) {
      //     const end = Math.round((swipeStartX - touch.pageX)/widthSwipe)
      //     flushSync(() => {
      //       setSwipeEndX(end+swipeEndX)
      //     })
      //     cardsWrapper.scrollLeft = end*widthSwipe
      //     console.log('cardWrapperScroll', end*widthSwipe)
      //   setTimeout(() => {
      //     setSliderStop(true)
      //   }, 500)
      // }

      // if (touch.pageX > swipeStartX && sliderStop) {
        // setSwipeEndX((touch.pageX - swipeStartX))
        // console.log(touch.pageX > swipeStartX, '+')
        // // setTransform((Number(transform) + widthSwipe))
        // setSliderStop(false)
        
        // // console.log(touch.pageX > swipeStartX, '-', (Number(transform) - widthSwipe))
        // const translatePxX = `${(Number(transform) + widthSwipe)}px`
        // // cardsWrapper.style.transform = translatePxX
        // cardsWrapper.style.left = `${swipeEndX}px`
        // console.log(widthSwipe, (Number(transform) - widthSwipe), cardsWrapper.style.transform)

      //   setTimeout(() => {
      //     setSliderStop(true)
      //   }, 500)
      // }
    })
  }



  //==========================================================
  // ADD EVENT 


 // =========================================================
 
 
 
 useEffect(() => {
  const elements = document.querySelectorAll('.slider__card');
  const sliderCards = document.querySelector('.slider');
  // console.log(Number(elements[0].offsetWidth), 'Number(elements[0].offsetWidth)')
  setWidthSwipe(Number(elements[0].offsetWidth))
  elements.forEach((i) => {
    setWidthSwipe(i.offsetWidth+28)
    })

  const swiper = new Swiper('.swiper', {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 600,
    centeredSlides: true,
    spaceBetween: -12,
  });
  console.log(
    swiper.on('loopFix', function (e)  {
      console.log(e, 'e')
    })
    )
  setEl(elements);
  setCardsWrapper(sliderCards);
}, [widthSwipe]);
// =========================================================

const conso = () => {
  const swiperOld = document.querySelector('.swiper').swiper
  // swiperOld.effect = 'cards'
  // swiperOld.slidesSizesGrid = swiperOld.slidesSizesGrid.map((slide) => {
  //   slide = (document.querySelectorAll('.slider__card')[0].offsetWidth + 30)
  //   return slide
  // })
  console.log('swiperOld', swiperOld)
}

// arrowRight
  const nextCard = () => {
    console.log('aaaaaaaaaa')
    const res = (transform - el[0].offsetWidth)
    const widthAllButNotHaveOneElement = (el[0].offsetWidth * -(el.length - 1))
    // const transformPx = 
    setTransform(res)
    
    if (widthAllButNotHaveOneElement <= res) {
      const buttonRight = document.querySelector('.slider-block__buttons-right')
      //change hidden button
      const buttonLeft = document.querySelector('.slider-block__buttons-left')
      if (buttonLeft.classList.contains('hidden')) { buttonLeft.classList.toggle('hidden') }

      cardsWrapper.style.transform = `translate(${res}px)`
      
    }
    //hidden button
    console.log(widthAllButNotHaveOneElement, res)
    if (widthAllButNotHaveOneElement >= res) {
      const buttonRight = document.querySelector('.slider-block__buttons-right')
      if (!buttonRight.classList.contains('hidden')) { buttonRight.classList.toggle('hidden') }
    }
    // cloneElement(0)
  };



// arrowLeft
  const prevCard = () => {
    // const elements = document.querySelectorAll('.slider__card');
    // const sliderCards = document.querySelector('.slider');
    const res =  (transform + el[0].offsetWidth)
    const widthAllButNotHaveOneElement = (el[0].offsetWidth * (el.length - 1))
    setTransform(res)
    
    // cardsWrapper.style.transform = `translate(${res}px)`
    // console.log('prev', (transform + el[0].offsetWidth), cardsWrapper.offsetWidth,  cardsWrapper.style.transform)

      console.log(widthAllButNotHaveOneElement, res, 'NEXT')
     if (widthAllButNotHaveOneElement >= res) {
      //change hidden button
      // const buttonLeft = document.querySelector('.slider-block__buttons-left')
      const buttonRight = document.querySelector('.slider-block__buttons-right')
      if (buttonRight.classList.contains('hidden')) { buttonRight.classList.toggle('hidden') }

      cardsWrapper.style.transform = `translate(${res}px)`
      console.log('next', res, cardsWrapper.offsetWidth, cardsWrapper.style.transform)
    }
    //hidden button
    if (res === 0) {
      const buttonLeft = document.querySelector('.slider-block__buttons-left')
      if (!buttonLeft.classList.contains('hidden')) { buttonLeft.classList.toggle('hidden') }
    }
    // cloneElement(elements.length-1)
  };
  
 
  // const nextCard = () => {
  //   cardsWrapper.style.transform = 'translate(-120px)'
  // };

  // const prevCard = () => {

  // };

  // const rearrangeElementsCard = () => {

  // };
  

  return <>
    {/* БЛОК СЛАЙДЕРА */}
    <div className="slider-block__wrapper">
      {/* DIV */}
      <div className=""></div>
      {/* BLOCK */}
      <div className="slider-block">
        <div className="slider-block__title">
          <h2 className="slider-block__text">Auditions <br/> Waiting For You</h2>
          <p className="slider-block__desc">Movies, TV Shows, Commercials & More</p>
        </div>
        {/* СЛАЙДЕР */}
        {/* <Swiper> */}
          <div className="slider-block__slider-wrapper swiper"  >
            {/* <div className="slider-block__buttons">
              <div className="slider-block__buttons-left" >
                <img alt="arrow" onTouchStart={e => console.log(e, 'onTouchMove')} className="arrow" src={arrowLeft} onClick={() => prevCard()}/>
              </div>
              <div className="slider-block__buttons-right" onClick={() => nextCard()}>
                <img alt="arrow" onTouchStart={e => console.log(e, 'onTouchMove')}  className="arrow" src={arrowRight}/>
              </div>
            </div> */}
            <div className="slider swiper-wrapper"  >
            {/* <div className="slider"  > */}
            
              {/* <SwiperSlide>  */}
                <div className="slider__card swiper-slide">
                  <div className="slider__card-wrapper">
                    <div className="slider__card-img">
                      <img src={imgCardOne} className="card-img" alt="card-img"/>
                    </div>
                    <div className="slider__card-desc">
                      <div className="slider__card-desc-first">
                        <span className="slider__card-low-text">
                          Casting New Christmas Dating Show for HBO
                        </span>
                      </div>
                      <div className="slider__card-desc-second">
                        <img src="" alt="" />
                        <span className="slider__card-big-text">
                          250 PER DAY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </SwiperSlide>
              <SwiperSlide>  */}
                <div className="slider__card swiper-slide">
                    <div className="slider__card-wrapper">
                      <div className="slider__card-img">
                        <img src={imgCardTwo} className="card-img" alt="card-img"/>
                      </div>
                      <div className="slider__card-desc">
                        <div className="slider__card-desc-first">
                          <span className="slider__card-low-text">
                            Casting New Christmas Dating Show for HBO
                          </span>
                        </div>
                        <div className="slider__card-desc-second">
                          <img src="" alt="" />
                          <span className="slider__card-low-text">
                            250 PER DAY
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="slider__card swiper-slide">
                    <div className="slider__card-wrapper">
                      <div className="slider__card-img">
                        <img src={imgCardTwo} className="card-img" alt="card-img"/>
                      </div>
                      <div className="slider__card-desc">
                        <div className="slider__card-desc-first">
                          <span className="slider__card-low-text">
                            Casting New Christmas Dating Show for HBO
                          </span>
                        </div>
                        <div className="slider__card-desc-second">
                          <img src="" alt="" />
                          <span className="slider__card-low-text">
                            250 PER DAY
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              {/* </SwiperSlide> */}
              {/* <SwiperSlide> */}
                <div className="slider__card swiper-slide">
                  <div className="slider__card-wrapper">
                    <div className="slider__card-img">
                      <img src={imgCardThree} className="card-img" alt="card-img"/>
                    </div>
                    <div className="slider__card-desc">
                      <div className="slider__card-desc-first">
                        <span className="slider__card-low-text">
                          Casting New Christmas Dating Show for HBO
                        </span>
                      </div>
                      <div className="slider__card-desc-second">
                        <img src="" alt="" />
                        <span className="slider__card-low-text">
                            250 PER DAY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </SwiperSlide> */}
                <div className="slider__card swiper-slide">
                  <div className="slider__card-wrapper">
                    <div className="slider__card-img">
                      <img src={imgCardOne} className="card-img" alt="card-img"/>
                    </div>
                    <div className="slider__card-desc">
                      <div className="slider__card-desc-first">
                        <span className="slider__card-low-text">
                          Casting New Christmas Dating Show for HBO
                        </span>
                      </div>
                      <div className="slider__card-desc-second">
                        <img src="" alt="" />
                        <span className="slider__card-big-text">
                          250 PER DAY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </SwiperSlide>
              <SwiperSlide>  */}
                <div className="slider__card swiper-slide">
                    <div className="slider__card-wrapper">
                      <div className="slider__card-img">
                        <img src={imgCardTwo} className="card-img" alt="card-img"/>
                      </div>
                      <div className="slider__card-desc">
                        <div className="slider__card-desc-first">
                          <span className="slider__card-low-text">
                            Casting New Christmas Dating Show for HBO
                          </span>
                        </div>
                        <div className="slider__card-desc-second">
                          <img src="" alt="" />
                          <span className="slider__card-low-text">
                            250 PER DAY
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="slider__card swiper-slide">
                    <div className="slider__card-wrapper">
                      <div className="slider__card-img">
                        <img src={imgCardTwo} className="card-img" alt="card-img"/>
                      </div>
                      <div className="slider__card-desc">
                        <div className="slider__card-desc-first">
                          <span className="slider__card-low-text">
                            Casting New Christmas Dating Show for HBO
                          </span>
                        </div>
                        <div className="slider__card-desc-second">
                          <img src="" alt="" />
                          <span className="slider__card-low-text">
                            250 PER DAY
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
              {/* </SwiperSlide> */}
              {/* <SwiperSlide> */}
                <div className="slider__card swiper-slide">
                  <div className="slider__card-wrapper">
                    <div className="slider__card-img">
                      <img src={imgCardThree} className="card-img" alt="card-img"/>
                    </div>
                    <div className="slider__card-desc">
                      <div className="slider__card-desc-first">
                        <span className="slider__card-low-text">
                          Casting New Christmas Dating Show for HBO
                        </span>
                      </div>
                      <div className="slider__card-desc-second">
                        <img src="" alt="" />
                        <span className="slider__card-low-text">
                            250 PER DAY
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </SwiperSlide> */}
            </div>
          </div>

        {/* </Swiper> */}
        <div className="slider__button">
          <button className="classic-button" onClick={() => props.enterSignIn()}>
            JOIN FOR FREE
          </button>
        </div>
      </div>
    </div>
    
  </>
} 

export default SliderBlock;