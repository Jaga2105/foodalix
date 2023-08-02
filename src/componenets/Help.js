import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../config";

const Section = ({id, title, description, isVisible, setIsVisible }) => {
  
  return (
    
    <div className="flex flex-col shadow rounded-md p-2.5 m-2.5">
      <div className="flex justify-between items-center cursor-pointer"
      onClick={() => setIsVisible(!isVisible)}> 
        <h3 className="font-semibold text-lg text-title">{title}</h3>
        {
        isVisible ? (
        <SlArrowUp  className="cursor-pointer" />
      ) : (
        <SlArrowDown className="cursor-pointer" />
      )}
      </div>
      {isVisible && <p className="text-bio text-base">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState(-1); /* Initially description of all questions are hidden */

  return (
    <div className="container">
      <div className="card-container">
      <h1 className="card-container-title pb-5"> FAQ</h1>
      {FAQ.map((question,index) => {
        return (
          <Section key={question.id} id={index} title={question.title} description={question.description}
          isVisible={visibleSection === index }
          setIsVisible={(display) => {
            if(display) {
              setVisibleSection(index);
            } else {
              setVisibleSection(" ");
            }
          }
          } />
  
        )
      }
      )}
      </div>
    </div>
  );
};

export default Help;