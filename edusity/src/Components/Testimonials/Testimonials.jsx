/* eslint-disable no-unused-vars */

import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

//funcionalidad del slider
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="next"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="back"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="user1" />
                <div>
                  <h3>Samantha Williams</h3>
                  <span>Edusity,Usa</span>
                </div>
              </div>
              <p>
                Choosin to porsue my degree at Edusity was one of the best
                desicions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="user2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,Usa</span>
                </div>
              </div>
              <p>
                Choosin to porsue my degree at Edusity was one of the best
                desicions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="user3" />
                <div>
                  <h3>Stefany Papadopoulos</h3>
                  <span>Edusity,Usa</span>
                </div>
              </div>
              <p>
                Choosin to porsue my degree at Edusity was one of the best
                desicions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="user4" />
                <div>
                  <h3>Mark Johnson</h3>
                  <span>Edusity,Usa</span>
                </div>
              </div>
              <p>
                Choosin to porsue my degree at Edusity was one of the best
                desicions I have ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
