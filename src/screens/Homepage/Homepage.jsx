import React from "react";
import { Component } from "../../components/Component";
import { Frame } from "../../components/Frame";
import { LogingSignin } from "../../components/LogingSignin";
import { Vector } from "../../icons/Vector";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div-2">
        <div className="overlap">
          <div className="frame-2">
            <div className="frame-3">
              <Vector className="vector-instance" />
              <Frame className="navbar" text="Monitoring" />
            </div>
            <div className="frame-4">
              <LogingSignin className="LOGING-SIGNIN-instance" property1="SING-IN" />
              <LogingSignin
                SINGInClassName="design-component-instance-node"
                className="LOGING-SIGNIN-instance"
                overlapGroupClassName="LOGING-SIGNIN-2"
                property1="LOG-IN"
              />
            </div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame-5">
            <div className="frame-6">
              <p className="build-your-smart">
                Build your Smart Home Care
                <br />
                with MemoMate
              </p>
              <p className="p">
                Real-time monitoring, personalized device configuration, data tracking, and emotional interaction, all
                at your fingertips.
              </p>
            </div>
            <Component />
          </div>
        </div>
        <div className="div-wrapper">
          <div className="frame-7">
            <div className="frame-8">
              <div className="frame-9">
                <img className="img" alt="Vector" src="/img/vector-2.svg" />
                <div className="text-wrapper-2">Device Adjustment</div>
              </div>
              <p className="text-wrapper-3">
                Automatically adjusts smart devices, such as bed height or room temperature, based on your status.
                Provides safety reminders and ensures a comfortable living environment.
              </p>
            </div>
            <img className="vector-2" alt="Vector" src="/img/vector-3.svg" />
          </div>
        </div>
        <div className="frame-10">
          <div className="frame-7">
            <div className="frame-11">
              <div className="frame-12">
                <div className="frame-13">
                  <img className="vector-3" alt="Vector" src="/img/vector-4.svg" />
                  <div className="text-wrapper-4">Monitoring</div>
                </div>
                <p className="text-wrapper-3">
                  Real-time monitoring of users&#39; health data with automatic sharing of physiological metrics to
                  caregivers, ensuring continuous tracking and management of health status.
                </p>
              </div>
            </div>
            <img className="vector-2" alt="Vector" src="/img/vector-5.svg" />
          </div>
        </div>
        <img className="element" alt="Element" src="/img/5471-1.png" />
        <p className="text-wrapper-5">Smart Furniture with the App</p>
        <div className="frame-14">
          <div className="text-wrapper-6">Interaction &amp; Social Engagement</div>
          <div className="frame-15">
            <div className="frame-16">
              <p className="text-wrapper-7">
                Provides interactive games, a journal feature, and regular reminders to stay connected with family and
                friends. Supports group calls and video chats to enhance social connections and reduce loneliness.
              </p>
              <Component className="component-1" />
            </div>
            <img className="element-2" alt="Element" src="/img/11434480-1.png" />
          </div>
        </div>
        <div className="frame-17">
          <div className="text-wrapper-6">Reminders &amp; Emotional Support</div>
          <div className="frame-18">
            <img className="element-3" alt="Element" src="/img/20943471-1.png" />
            <div className="frame-19">
              <p className="text-wrapper-8">
                The smart voice assistant offers daily reminders such as medications and schedules, while providing
                emotional support based on mood fluctuations, helping users manage their emotions.
              </p>
              <Component />
            </div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="frame-20">
            <div className="contact-us-email">
              Contact Us
              <br />
              Email
              <br />
              Phone
              <br />
              Social Media
            </div>
            <div className="frame-21">
              <img className="img-2" alt="Facebook" src="/img/facebook.png" />
              <img className="img-2" alt="Twitter" src="/img/twitter.png" />
              <img className="img-2" alt="Instagram" src="/img/instagram.png" />
              <img className="twitter-x" alt="Twitter x" src="/img/twitterx.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
