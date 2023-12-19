import React from 'react';

interface IAccordion {
  title: string,
  children: React.ReactElement 
}

const Accordion = (props:IAccordion) => {
  const { title, children } = props;
  return (
    <div className="accordion">
      <div className="accordion-title text-dark font-bold text-lg leading-tight mb-4">
        { title }
      </div>
      <div className="accordion-content">
        { children }
      </div>      
    </div>
  )
}

export default Accordion
