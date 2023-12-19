import React, { useState } from 'react';
import './Accordion.css'

interface IAccordion {
  title: string,
  children: React.ReactElement,
  active?: boolean
}

const Accordion = (props:IAccordion) => {
  const { title="", children=(<></>), active=false} = props;
  const [isActive, setActive] = useState(active);

  const handleClick = () => {
    setActive(!isActive)
  }

  return (
    <div className={`accordion py-4 ${isActive ? "active" : ""}`}>
      <button onClick={handleClick} className="accordion-title text-dark text-left w-full py-2 pr-24  md:pr-10">
        <span className="font-bold text-lg leading-tight">
          { title }
        </span>
      </button>
      <div className="accordion-content">
        { children }
      </div>      
    </div>
  )
}

export default Accordion
