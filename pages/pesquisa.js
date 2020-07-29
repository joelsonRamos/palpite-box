import React, {useState} from 'react'
import PageTitle from '../components/PageTitle'
import Link from 'next/link'

const Pesquisa = () => {
    const [ form, setForm ] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 5
    })
    const notas = [0, 1, 2, 3, 4, 5]
    const [ sucess, setSuccess ] = useState(false)
    const [ retorno, setRetorno ] = useState({})
    const save = async() => {
        
        try{
            const response = await fetch('/api/save',{
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err){

        }
    } 
    const onChange = evt =>{
        const value = evt.target.value
        const key = evt.target.name
        setForm(old =>({
            ...old,
            [key]: value
        }))
    }
    return(
        <div className="pt-6 ">
            <PageTitle title="Pesquisa"/>
            <h1 className="text-center font-bold my-4 text-2xl">Crítica e sugestões</h1>
            <p className='text-center mb-6'>
            A pizzaria Ribeirão sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            {!sucess && <div className=" w-11/12 sm:w-9/12  mx-auto   bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4">
                <div className="flex flex-wrap  mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Seu nome:</label>
                        <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Nome" onChange={onChange} name='Nome' value={form.Nome}></input>
                    </div>
                </div>

                <div className="flex flex-wrap  mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">E-mail:</label>
                        <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="E-mail" onChange={onChange} name='Email' value={form.Email}></input>
                    </div>
                </div>

                <div className="flex flex-wrap  mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Whatsapp:</label>
                        <input type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Whatsapp" onChange={onChange} name='Whatsapp' value={form.Whatsapp}></input>
                    </div>
                </div>

                <div className="flex flex-wrap  mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Mensagem</label>
                        <textarea type="text" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" rows="5" cols="33" placeholder="Sua opnião" onChange={onChange} name='Whatsapp' value={form.Whatsapp}></textarea>
                    </div>
                </div>
                
                <div className="w-full px-3">
                    <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Sua nota para o atendimento
                    </p>
                </div>
                <div className="flex justify-center py-6">
                {notas.map(nota => {
                        return (
                        <label className="block w-10 sm:w-16 text-center">
                            {nota} <br/>
                            <input type="radio" name='Nota' value={nota} onChange={onChange}/>
                        </label>
                        )
                    })
                }
                </div>
                {/* <pre>
                    {JSON.stringify(form, null, 2)}
                </pre> */}
                <div className="flex justify-center py-6">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={save}>
                        Enviar
                    </button>
                </div>
            </div>}
            {sucess && <div className="w-11/12 sm:w-9/12  mx-auto   bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4"> 
                <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">Obrigado por contribuir com sua sugestão ou crítica.</p>
                {
                    retorno.showCoupon && <div className="text-center border p-4 mb-4">
                        Seu Cupom: <br/>
                        <span className="font-bold text-2xl">{ retorno.Cupom }</span>
                        
                        </div>
                }
                {
                    retorno.showCoupon && <div className="text-center border p-4 mb-4">
                        <span className="font-bold block mb-2">{ retorno.Promo }</span>
                        <br/>
                        <span className="italic">
                        Tire um print ou foto desta tela e apresente na nossa loja
                        </span>
                        
                        </div>
                }
                
            </div>}
        </div>
    )
}

export default Pesquisa