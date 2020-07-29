import React from 'react'
import Link from 'next/link'
import Icon from '@mdi/react'
import PageTitle from '../components/PageTitle'
import { 
    mdiPhoneInTalk ,
    mdiEmail ,
    mdiWhatsapp   } from '@mdi/js'

const Contato = () =>{
    return (
        <div className="">
            <PageTitle title="Contato"/>
            <div className="min-w-full w-11/12 sm:w-9/12  mx-auto bg-white shadow-md rounded px-4 pt-6 pb-8 mt-8 mb-4">
                <h1 className="font-bold text-xl mb-2">Contato</h1>

                    <div className="flex flex-wrap inline  mb-6">
                        
                            <div>
                                <Icon path={mdiPhoneInTalk} title="telefone" size={1}/> 
                            </div>
                            <div className="ml-4">
                                <p>(41) 3030-4400</p>

                            </div>
                    </div>
                    <div className="flex flex-wrap inline  mb-6">
                        
                        <div>
                            <Icon path={mdiEmail} title="email" size={1}/> 
                        </div>
                        <div className="ml-4">
                            <p>teste@teste.com.br</p>

                        </div>
                </div>
                <div className="flex flex-wrap inline  mb-6">
                        
                        <div>
                            <Icon path={mdiWhatsapp} title="whatsapp" size={1}/> 
                        </div>
                        <div className="ml-4">
                            <p>teste@teste.com.br</p>

                        </div>
                </div>
                

            </div>
        </div>
    )
}

export default Contato