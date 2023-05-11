import React from "react";

export const FooterBase = (props) => {
  return <>
    <div className="footer-base">
      <div className="footer-base__wrapper">
        <div className="footer-base__dashboard">
          <ul className="footer-base__dashboard-list">
            <li className="footer-base__dashboard-item">
              <a href="#1223">Contact</a>
            </li>
            <li className="footer-base__dashboard-item">
              <a href="#1223" >Privacy Policy</a>
            </li>
            <li className="footer-base__dashboard-item">
              <a href="#1223">Cookie Policy</a>
            </li>
            <li className="footer-base__dashboard-item">
              <a href="#1223"   >Terms of Service</a>
            </li>
            <li className="footer-base__dashboard-item">
              <a  href="#1223" >Cancel Subscription</a>
            </li>
          </ul>
        </div>
        <div className="footer-base__disclaimer">
          <p className="footer-base__disclaimer-text">
            Disclaimer: Become a Superstar is not a talent agency, 
            employer or a talent scout; the site is only a venue. 
            Become a Superstar does not promise or facilitate employment. 
            The number of casting calls available varies by location, roles
            available and the level of experience required. 
            As with any business, results may vary, and will be based on 
            individual capacity, experience, expertise, and level of desire.
            There are no guarantees concerning the level of income the user
            may experience.
          </p>
        </div>
      </div>
      <div className="footer-base__sub-and-copy">
          <div className="footer-base__subscription">
            <div className="footer-base__sub-buttons">
              <div className="footer-base__button-apple">
                <button className="button-subscription">
                  <span>Subscribe with</span>
                  {/* <img src={} alt="" className="apple-logo-btn"/> */}
                </button>
              </div>
              <div className="footer-base__button-google">
                <button className="button-subscription">
                  {/* <img src={} alt="" className="google-logo-btn"/> */}
                  <span>Pay</span>
                </button>
              </div>
            </div>
            <div className="footer-base__description">
              <p className="footer-base__description-sub-text">
                Superstarted provides users with a 3-day free trial subscription
                to access all premium features, which include but not limited
                to showing available casting calls and auditions, list of 
                400+ casting agencies, actor training and more. First 3
                days of subscription are free and cost $0.00, after 3 days, 
                if subscription is not cancelled, the user is charged 
                $9.99/week on a recurring basis. Recurring subscription 
                payments will be charged via Apple Pay or Google Pay (depending 
                on the method used to subscribe to a free trial) when the 
                3-day free trial ends. Subscription automatically renews on
                a weekly basis ($9.99/week) unless it is canceled at least 
                24 hours before the end of the current period. 
                User’s account is charged for renewal within 24 hours 
                prior to the end of the current period.
              </p>
            </div>
            <div className="footer-base__copyright">
              <p className="footer-base__copyright-text">
                Copyright © 2020. All Rights Reserved.
              </p>
            </div>
            
          </div>
        </div>
    </div>
  </>
};

export default FooterBase;