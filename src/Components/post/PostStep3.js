import React, { useState } from 'react';
import { FaCommentDollar } from 'react-icons/fa'
import CurrencyInput from 'react-currency-masked-input';
import api from '../../Services/api';
import LoaderStandart from '../standarts/LoaderStandart';
import { useNavigate } from 'react-router-dom';

function PostStep3({ setPostStep }) {

    const [loading, setLoading] = useState(false)
    const n = useNavigate()

    async function createParty(){
        try {
            setLoading(true)
            const nome = localStorage.getItem("FN")
            const local = localStorage.getItem("FL")
            const valor = localStorage.getItem("FP") * 100
            const gerente = localStorage.getItem("FuserID")
            const resp = await api.post("party",{
                nome,
                local,
                valor
            },{
                headers:{
                    gerente
                }
            })

            console.log({
                message: "boa",
                data:resp
            });
            setLoading(false)
            n("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {loading?
                <LoaderStandart/>
            :
                <>
                    <FaCommentDollar id='map' />
                    <label>
                        <h3>Valor : </h3>
                        <div className='currency_field'>
                            <div className='currency_input_field'>
                                <p>R$</p>
                                <div className='currency_input'>
                                    <CurrencyInput id="currency" onChange={e=>localStorage.setItem("FP",e.target.value)}/>
                                </div>
                            </div>
                        <button onClick={createParty}> Criar</button>
                        </div>
                    </label>
                </>
            }
        </>
    );
}

export default PostStep3;
