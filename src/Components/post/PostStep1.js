import React, { useState } from 'react';

import {GiPartyPopper} from 'react-icons/gi'
import InputPartyStandart from '../standarts/InputPartyStandart';




function PostStep1({setPostStep}) {



  return (
    <>
     <GiPartyPopper id='map' />
      <label>
        <h3>Nome :  </h3>
          <InputPartyStandart setPostStep={setPostStep} postStep={1} valueStorage={"FN"}/>
      </label>
      </>

  );
}

export default PostStep1;
