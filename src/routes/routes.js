import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from '../components/reportcard';
import ReportCardContents from '../components/reportcard';


function RoutesR() {
  return (
    <BrowserRouter>

      <div>

        <Routes>
        <Route path='/' exact={true} element = {<ReportCardContents/>}></Route>
          <Route path='/result' element={<Result />} />
        </Routes>


      </div>
    </BrowserRouter>
  )
}

export default RoutesR;