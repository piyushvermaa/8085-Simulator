import React from 'react'

const Displaycontainer = () => {
  return (
    <div>
      <div className="display-helper--container flex w-[36rem] mt-0 m-20 mb-0">
      <div className="display border-2 border-black">
        <input onClick={() => {}} onfocus="blur();" className="display-cell" type="text" value="" id="data-input-0" maxLength="1" />
        <input onClick={() => {}} onfocus="blur();" className="display-cell" type="text" value="" id="data-input-1" maxLength="1" />
        <input onClick={() => {}} onfocus="blur();" className="display-cell" type="text" value="" id="data-input-2" maxLength="1" />
        <input onClick={() => {}} onfocus="blur();" className="display-cell" type="text" value="" id="data-input-3" maxLength="1" />
      </div>
      <div className='display border-2 border-black' id='display'>
        <input onClick={() => {}} onfocus="blur();" className="display-cell" type="text" value="" id="data-input-4" maxLength="1" />
        <input onClick={() => {}} onfocus="blur();" className="display-cell" type="text" value="" id="data-input-5" maxLength="1" />
      </div>
      
    </div>
    </div>
  )
}

export default Displaycontainer
