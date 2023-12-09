import React from 'react'
import Header from './components/Header'
import Resv_Cal from './components/Resv_Cal'

const Reservas = () => {
  return (
    <>
        <div>
            <Header />
            <p className='text-center font-semibold text-[30px] py-6'>Genera tu cita</p>
            <Resv_Cal />
        </div>
    </>
  )
}

export default Reservas