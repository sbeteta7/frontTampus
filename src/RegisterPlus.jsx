import React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import RegisterPlusForm from './components/RegisterPlusForm'
import RegisterPlusBank from './components/RegisterPlusBank';
import RegisterPlusFinal from './components/RegisterPlusFinal';
import RegisterPlusComplete from './components/RegisterPlusComplete';


function RegisterPlus() {
    return (
      <div className="">
        <Outlet />
        <Routes>
            <Route path="form" element={<RegisterPlusForm />} />
            <Route path="bank" element={<RegisterPlusBank />} />
            <Route path="final" element={<RegisterPlusFinal />} />
            <Route path="complete" element={<RegisterPlusComplete />} />
        </Routes>
      </div>
    );
  }

export default RegisterPlus