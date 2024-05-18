import React, { Component } from 'react'
import imgAbout from "../assets/media/watch_video.jpg";


export class About extends Component {
  render() {
    return (
        <section class="about">
        <div class="about__header">
            <h3>About US</h3>
            <p>who we are</p>
        </div>
        <div class="about__content">
            <div class="content__text">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi at reiciendis excepturi eius, 
                    quis natus iusto commodi omnis fuga ad dolorum 
                    necessitatibus delectus hic, 
                    facere repellat optio corrupti
                     repellendus incidunt! Dolor sit amet consectetur adipisicing elit. 
                     Modi at reiciendis excepturi, quis natus iusto commodi omnis fuga ad dolorum 
                     necessitatibus delectus hic, 
                     facere repellat optio corrupt eius, 
                     quis natus iusto commodi omnis fuga ad dolorum 
                     necessitatibus delectus hic
                </p>
                <button>learn more</button>
            </div>
            <div class="content__midia">
                <img src={imgAbout} alt=""/>
            </div>
        </div>
    </section>
    )
  }
}

export default About
