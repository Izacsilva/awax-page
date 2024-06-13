import React from 'react'
import foto1 from '../assets/media/foto1.jpg'
import foto2 from '../assets/media/fotos-trabalho-photo1.jpg'
import foto3 from '../assets/media/foto3.jpg'
import foto4 from '../assets/media/foto4.jpg'
import foto5 from '../assets/media/foto5.jpg'
import foto6 from '../assets/media/foto6.jpg'
import foto7 from '../assets/media/foto7.jpg'
import foto8 from '../assets/media/foto8.jpg'
import foto9 from '../assets/media/foto9.jpg'

const OurProjects = () => {
  return (
    <section className='section-OurProjects'>
        <section className='OurProjects__filter--product'>
          <ul>
              <li>All</li>
              <li>Photo</li>
              <li>Branding</li>
              <li>Adverts</li>
              <li>Development</li>
              <li>Misc</li>
          </ul>
        </section>
        <section className='OurProjects__galery-photos' >
          <div className="galery-photo__photos">
            <div className="photos__info">
              <h1>About</h1>
              <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto1} alt="" />
            </div>
          </div>
          <div className="galery-photo__photos">
            <div className="photos__info">
            <h1>About</h1>
            <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto2} alt="" />
            </div>
          </div>
          <div className="galery-photo__photos">
            <div className="photos__info">
            <h1>About</h1>
            <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto3} alt="" />
            </div>
          </div>
          <div className="galery-photo__photos">
            <div className="photos__info">
            <h1>About</h1>
            <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto4} alt="" />
            </div>
          </div>
          <div className="galery-photo__photos">
            <div className="photos__info">
            <h1>About</h1>
            <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto5} alt="" />
            </div>
          </div>
          <div className="galery-photo__photos">
            <div className="photos__info">
            <h1>About</h1>
            <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto6} alt="" />
            </div>
          </div>
          <div className="galery-photo__photos">
            <div className="photos__info">
            <h1>About</h1>
            <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto7} alt="" />
            </div>
          </div>
          <div className="galery-photo__photos">
            <div className="photos__info">
            <h1>About</h1>
            <p>presents metus urna, flegeat placerat</p>
            </div>
            <div className="photos__img">
              <img src={foto8} alt="" />
            </div>
          </div>
          
        </section>
        <section className='OurProjects__button'>
          <button>more projects</button>
        </section>
    </section>
  )
}

export default OurProjects
