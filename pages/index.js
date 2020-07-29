import React from 'react'
import Link from 'next/link'
import userSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const {data, error} = userSWR('/api/get-promo', fetcher)
    // return (<pre>{JSON.stringify(data)}</pre>)
    return (
        <div className=" min-h-full sm:min-h-0 md:min-h-full lg:min-h-0 xl:min-h-full">
            <PageTitle title="Home"/>
            
            <p className='mt-12 text-center'>
                A pizzaria Ribeirão sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className="text-center my-12">
                <Link href='/pesquisa'>
                    <a className="bg-orange-600 px-6 py-4 text-white font-bold rounded-lg shadow-lg hover:shadow">Dar opinião ou sugestão</a>
                </Link>
            </div>
            {!data && <p>Carregando....</p>}
            {!error && data && data.showCoupon &&
                <p className="my-12 text-center">
                    {data.message}
                </p>
            }
        </div>
    )
}

export default Index