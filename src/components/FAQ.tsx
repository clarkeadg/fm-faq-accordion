import Accordion from './Accordion'

const FAQ = () => {
  return (
    <div className="bg-card rounded-lg md:rounded-3xl overflow-hidden p-4">  
      <div className="px-4 py-6">
        <div className="text-dark font-bold text-4xl md:text-6xl leading-tight mb-4">
          FAQs
        </div>
        <Accordion title={"What is Frontend Mentor, and how will it help me?"}>
          <p className="text-light">
            Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
          </p>
        </Accordion>
        <Accordion title={"Is Frontend Mentor free?"}>
          <p className="text-light">
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.
          </p>
        </Accordion>
        <Accordion title={"Can I use Frontend Mentor projects in my portfolio?"}>
          <p className="text-light">
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!
          </p>
        </Accordion>
        <Accordion title={"How can I get help if I'm stuck on a Frontend Mentor challenge?"}>
          <p className="text-light">
            The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.
          </p>
        </Accordion>
      </div>
    </div>
  )
}

export default FAQ
