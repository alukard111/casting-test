import React, { useEffect } from "react";

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

  


  



  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 600,
      centeredSlides: true,
      spaceBetween: -12,
    });
  
  });
  // =========================================================



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
            <div className="slider swiper-wrapper"  >
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