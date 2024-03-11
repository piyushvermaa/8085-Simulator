import React from 'react'

const Keypad = () => {
  return (
    <div className='flex m-20 mt-5'>
        <div className="keypad-buttons--container">
        <span className="keypad-button" ontouch="fix" id="button-C"> C </span>
        <span className="keypad-button" onfocus="blur()" id="button-D"> D </span>
        <span className="keypad-button" onfocus="blur()" id="button-E"> E </span>
        <span className="keypad-button" onfocus="blur()" id="button-F"> F </span>
        <span className="keypad-button" onfocus="blur()" id="button-8"> 8 </span>
        <span className="keypad-button" id="button-9"> 9 </span>
        <span className="keypad-button" id="button-A"> A </span>
        <span className="keypad-button" id="button-B"> B </span>
        <span className="keypad-button" id="button-4"> 4 </span>
        <span className="keypad-button" id="button-5"> 5 </span>
        <span className="keypad-button" id="button-6"> 6 </span>
        <span className="keypad-button" id="button-7"> 7 </span>
        <span className="keypad-button" id="button-0"> 0 </span>
        <span className="keypad-button" id="button-1"> 1 </span>
        <span className="keypad-button" id="button-2"> 2 </span>
        <span className="keypad-button" id="button-3"> 3 </span>
      </div>
      <div className="extra-buttons--container">
        <span className="extra-button" id="button-RES">  <u>R</u>ES  </span>
        <span className="extra-button" id="button-INR">  <u>I</u>NR  </span>
        <span className="extra-button" id="button-GO">   G<u>O</u>   </span>
        <span className="extra-button" id="button-REG">  RE<u>G</u>  </span>
        <span className="extra-button" id="button-SET">  <u>S</u>ET  </span>
        <span className="extra-button" id="button-DCR">  D<u>C</u>R  </span>
        <span className="extra-button" id="button-EXEC"> E<u>X</u>EC </span>
        <span className="extra-button" id="button-STEP"> STE<u>P</u> </span>
      </div>
    </div>
  )
}

export default Keypad
