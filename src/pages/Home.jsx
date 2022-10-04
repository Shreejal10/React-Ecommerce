import React from 'react'
import Card from '../components/Card'

const Home = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-4xl text-center mt-5'>Featured Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-5 gap-8'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                {/* <CardComponent /> */}
            </div>
        </div>
    )
}

export default Home