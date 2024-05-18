import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
      <>
        <section className="hero">

            <div className="sliders">
                    <div className="slide slideOne">
                        <div className="slideContent">
                            <h1 class="slideOne__title">Design is about<br/><span>communication11</span></h1>
                            <p class="slideOne__phone">
                                Call US: +00 0 1234 5678
                            </p>
                            <button type="button" className="slideOne__btnAction">
                                get in touch!
                            </button>
                        </div>
                    </div>
                    <div className="slide slideTwo">
                        <div className="slideContent">
                                <h1 class="slideOne__title">Design is about<br/><span>communication22</span></h1>
                                <p class="slideOne__phone">
                                    Call US: +00 0 1234 5678
                                </p>
                                <button type="button" className="slideOne__btnAction">
                                    get in touch!
                                </button>
                            </div>
                    </div>
                    <div className="slide slideThree">
                        <div className="slideContent">
                                <h1 class="slideOne__title">Design is about<br/><span>communication33</span></h1>
                                <p class="slideOne__phone">
                                    Call US: +00 0 1234 5678
                                </p>
                                <button type="button" className="slideOne__btnAction">
                                    get in touch!
                                </button>
                            </div>
                    </div>
            </div>

            <div className="pointers">
                <div className="pointer active"></div>
                <div className="pointer"></div>
                <div className="pointer"></div>
            </div>
        </section>
      </>
    )
  }
}

export default Hero

