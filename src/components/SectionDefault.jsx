import '../styles/sass/components/_SectionsDefault.scss';


const SectionDefault = (props) => {
    
    const { title, description, corFundo, corTexto} = props;

    return (
    <section className='section-default' style={{background: corFundo, color: corTexto}} >
      <div className="section-default__title"><h3>{title}</h3></div>
      <div className="section-default__description">{description}</div>
      <div className="section-default__body">{props.children}</div>
    </section>

    
  )
}

export default SectionDefault
