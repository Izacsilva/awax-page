import React, { Children } from 'react'
import '../styles/sass/components/_SectionsDefault.scss';


const SectionDefault = (props) => {
    
    const { title, description, Children} = props;

    return (
    <section className='section-default'>
      <div className="section-default__title"><h3>{title}</h3></div>
      <div className="section-default__description">{description}</div>
      <div className="section-default__body">{Children}</div>
    </section>

    
  )
}

export default SectionDefault
