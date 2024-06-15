import React from 'react'
import twitter from '../assets/images/twitter.png'
import facebook from '../assets/images/facebook.png'
import googleplus from '../assets/images/googleplus.png'
import linkedin from '../assets/images/linkedin.png'
import pinterest from '../assets/images/pinterest.png'
import mulher1 from '../assets/media/mulher1.png'

const OurTeam = () => {
  return (
    <section className='ourTeams'>
      <div className="cards">
        <div className="card">
          <picture className='imgPerson'>
            <img src={mulher1} alt="" />
          </picture>
          <div className="teamInfo">
            <h3>Jane Doe</h3>
            <p>master mind</p>
          </div>
          <div className="teamSocial">
            <picture className='socialIcon'><img src={twitter} alt="" /></picture>
            <picture className='socialIcon'><img src={facebook} alt="" /></picture>
            <picture className='socialIcon'><img src={linkedin} alt="" /></picture>
            <picture className='socialIcon'><img src={googleplus} alt="" /></picture>
            <picture className='socialIcon'><img src={pinterest} alt="" /></picture>
          </div>
        </div>
        <div className="card">
          <picture className='imgPerson'>
            <img src={mulher1} alt="" />
          </picture>
          <div className="teamInfo">
            <h3>Miker Shiller</h3>
            <p>Creative heade</p>
          </div>
          <div className="teamSocial">
            <picture className='socialIcon'><img src={twitter} alt="" /></picture>
            <picture className='socialIcon'><img src={facebook} alt="" /></picture>
            <picture className='socialIcon'><img src={linkedin} alt="" /></picture>
            <picture className='socialIcon'><img src={googleplus} alt="" /></picture>
            <picture className='socialIcon'><img src={pinterest} alt="" /></picture>
          </div>
        </div>
        <div className="card">
          <picture className='imgPerson'>
            <img src={mulher1} alt="" />
          </picture>
          <div className="teamInfo">
            <h3>Anna Johns</h3>
            <p>Technical Lead</p>
          </div>
          <div className="teamSocial">
            <picture className='socialIcon'><img src={twitter} alt="" /></picture>
            <picture className='socialIcon'><img src={facebook} alt="" /></picture>
            <picture className='socialIcon'><img src={linkedin} alt="" /></picture>
            <picture className='socialIcon'><img src={googleplus} alt="" /></picture>
            <picture className='socialIcon'><img src={pinterest} alt="" /></picture>
          </div>
        </div>
      </div>
      <div>
        <div className="teamPointers">
        <div className="pointer active"></div>
        <div className="pointer"></div>
        <div className="pointer"></div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam
