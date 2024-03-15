import React from "react";
// css
import '../../css/main/main.css'

// Nav

import ResponsiveBottomNav from "../nav/ResponsiveBottomNav";
import ResponsiveTopNav from "../nav/ResponsiveTopNav";
import MainNav from "../nav/MainNav";

// Body

import Post from "./post";
import Stories from "./stories";
import ProfileLink from "./profile/ProfileLink";




const Main = () => {
  return (
    <section className="main-box">

      <ResponsiveTopNav />
      <MainNav />
      <ResponsiveBottomNav />       

      <section className="post">
        <Stories /> 
        <Post />
      </section>

      <section className="right-aside">
        <ProfileLink />
        <p className="right-aside-p">Sugerencias para ti</p>
        <ProfileLink />
      </section>
    </section>
  );
};

export default Main;
