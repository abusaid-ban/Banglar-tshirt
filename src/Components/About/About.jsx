import React from 'react';
import Myself from '../Myself/Myself';
import MyDream from '../MyDream/MyDream';
import MyMission from '../MyMission/MyMission';
import './About.css';

const About = () => {
    return (
        <div className='about'>
           <h3>This is about page</h3> 
           <section className='flex'>
            <Myself></Myself>
            <MyDream></MyDream>
            <MyMission></MyMission>
           </section>
        </div>
    );
};

export default About;