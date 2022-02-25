import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import PartyBody from './party/PartyBody';
import PartyFeed from './party/PartyFeed';
import PartyHeader from './party/PartyHeader';

function PartyMainSection({id}) {

  const[partyName,setName] = useState("")
  const[local,setlocal] = useState("")
  const[valor,setValor] = useState("")


  useEffect(()=>{
    async function getparty(){
      try {
        const party = await api.get("/party/"+id)
        const data = party.data.partyInfo
        setName(data.nome)
        setlocal(data.local)
        setValor(data.valor)
        console.log(valor);
      } catch (error) {
        console.log(error);
      }
     
    }
    getparty()
  })
  return (
      <main>
        <div className='party_container'>
          <PartyHeader nome={partyName} local={local} valor={valor}/>
          <PartyBody/>
          <PartyFeed/>
        </div>
      </main>
  );
}

export default PartyMainSection;
