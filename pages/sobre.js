import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <div className="min-h-0 min-h-full sm: h-64">
            <PageTitle title="Sobre"/>
            <div className="w-11/12 sm:w-9/12  mx-auto bg-white shadow-md rounded px-4 pt-6 pb-8 mt-4 mb-4">
            <h1 className="font-bold text-xl mb-2">Sobre</h1>
            <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>

            </div>
        </div>
    )
}

export default Sobre