import React from 'react'

function InputPartyStandart({setPostStep, postStep, valueStorage}) {
  return (
    <div className='input'>
          <div className="input-field">
            <input id='input' onChange={e=>localStorage.setItem(valueStorage,e.target.value)} />
          </div>
        <button onClick={setPostStep(postStep)}> Next</button>
    </div>
  )
}

export default InputPartyStandart