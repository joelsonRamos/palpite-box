import React, { Component } from 'react'
import '../css/style.css'
import Layout from '../components/Layout'

const MyApp = ({Component, pageProps}) => {
    return (
        <div>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
            
        </div>
    )
}

export default MyApp