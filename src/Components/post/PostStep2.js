import React from 'react';
import { BiMapAlt } from 'react-icons/bi'
import InputPartyStandart from '../standarts/InputPartyStandart';

function PostStep2({setPostStep}) {
  return (
    <>
    <BiMapAlt id='map' />
     <label>
       <h3>Local : </h3>
        <InputPartyStandart setPostStep={setPostStep} postStep={2} valueStorage={"FL"}/>
     </label>
     </>
  );
}

export default PostStep2;
