import React from 'react'


const Footer = () => {
    return(
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
                Pojeto desenvolvido por: 
                <a className="px-2 hover:underline" href="https://www.facebook.com/joelson.ramos.58/">Joelson</a> / 
                <a className="px-2 hover:underline" href="https://www.linkedin.com/in/joelson-ramos/">Linkdin</a> / 
                <a className="px-2 hover:underline" href="https://github.com/joelsonRamos">Github</a>
            
                <div className="mt-2">
                    <img className="inline p-4" src="/logo_semana_fsm.png"/>
                    <img className="inline p-4" src="/logo_devpleno.png"/>
            
                </div>
            </div>

        </div>
    )
}
export default Footer