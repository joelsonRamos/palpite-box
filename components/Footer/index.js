import React, { Component } from 'react'
import Icon from '@mdi/react'
import { 
    mdiYoutube ,
    mdiFacebook,
    mdiInstagram,
    mdiMapMarker   } from '@mdi/js'



const Footer = () => {
    return(
        <div className="bg-gray-900 p-4">
            <div className="container mx-auto text-center  text-white ">
                
                <p className="block font-bold">Siga nas redes Sociais:</p>
                <div className="mt-1 flex justify-center text-center mb-3 ">
                
                    <div className="mr-4">
                        <a className="px-2 hover:underline" href="https://www.youtube.com" target="_blank"><Icon path={mdiYoutube} title="youtube" size={1} /></a>
                    </div>
                    <div className="mr-4">
                        <a className="px-2 hover:underline" href="https://www.facebook.com" target="_blank"><Icon path={mdiFacebook} title="facebook" size={1} /></a>
                    </div>
                        <div>
                    <a className="px-2 hover:underline" href="https://www.instagram.com" target="_blank"><Icon path={mdiInstagram} title="instagram" size={1} /></a>
                    </div>             
                    

                </div>
                <div className="flex justify-center inline mb-4">
                        <div>
                            <Icon path={mdiMapMarker} color="red" title="localização" size={1} />
                        </div>
                        <div>
                            <p className="font-serif text-sm">
                                Rua Atílio Brunetti, 1164 <br/> Capão Raso, Curitiba
                            </p>
                        </div>
                    
                </div>

                <p className="font-serif text-sm ">&copy; 2020 - Todos os direitos reservados - <a className="px-2 hover:underline" href="https://www.linkedin.com/in/joelson-ramos/" target="_blank">Joelson</a> </p>

                
            </div>

        </div>
    )
}
export default Footer