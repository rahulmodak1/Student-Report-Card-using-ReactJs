import React, { useState } from 'react'

import { Link } from 'react-router-dom';

import './reportcard.css'


function ReportCardContents() {
    const [engValue, setEngValue] = useState();
    const [bengValue, setBengValue] = useState();
    const [geoValue, setGeoValue] = useState();
    const [histValue, setHistValue] = useState();
    const [polValue, setPolValue] = useState();
const [resMarks, setResMarks] = useState();
const [grade , setGrade] = useState()



    const onSetEng = (e) => {
        const value = e.target.value
        setEngValue(value)

    }
    const onSetBeng = (e) => {
        const value = e.target.value
        setBengValue(value)

    }
    const onSetGeo = (e) => {
        const value = e.target.value;
        setGeoValue(value);

    }
    const onSetHist = (e) => {
        const value = e.target.value
        setHistValue(value)

    }
    const onSetPol = (e) => {
        const value = e.target.value
        setPolValue(value)

    }




    const submitHandler = () => {

    //   var x = parseInt(document.getElementById('a')).value
    //   var y = parseInt(document.getElementById('b')).value
    //   var z =parseInt(document.getElementById('c')).value
    //   var xx = parseInt(document.getElementById('d')).value
    //   var xy =parseInt(document.getElementById('e')).value
    const sum = parseFloat((engValue + bengValue + histValue + geoValue + polValue))
    const result = sum / 5
 ;
 setResMarks(result) ;
 var gradePoint = '' ;
 if(result >= 97 && result <= 100){
     gradePoint = 'A+'
 }
 else if(result >= 90 && result <= 96){
     gradePoint = 'A'
 }
 else if(result >=79 && result <= 89){
     gradePoint = 'B+'
 }
 else if(result >= 69 && result <= 68){
     gradePoint = 'B'
 }
 else if(result >= 58 && result <= 67){
     gradePoint = 'C+'
 }
 else if(result >= 47 && result <= 57){
     gradePoint = 'C'
 }
 else if(result >= 36 && result <= 46){
     gradePoint = 'D'
 }
 else if(result >= 0 && result <= 46){
     gradePoint = 'F'
 }
 setGrade(gradePoint)
 
     



        
      


    }
    return (
<div>

        <div className="main">
            <div className='container'>
                <div className='header'><h2>Student Report Card</h2></div>
                <div className='inputs'>
                    <label>ENTER YOUR ENGLISH MARKS</label>
                    <input type="number"  id='a' onChange={onSetEng} /></div>
                <div className='inputs'>

                    <label>ENTER YOUR BENGALI MARKS</label>
                    <input type="number" id='b' onChange={onSetBeng} /></div>
                <div className='inputs'>

                    <label>ENTER YOUR GEOGRAPHY MARKS</label>
                    <input type="number" id='c'  onChange={onSetGeo} /></div>
                <div className='inputs'>

                    <label>ENTER YOUR HISTORY MARKS</label>
                    <input type="number" id='d' onChange={onSetHist} /></div>
                <div className='inputs'>

                    <label>ENTER YOUR POL SCIENCE MARKS</label>
                    <input type="number" id='e'  onChange={onSetPol} /></div>
                <div className='button'>

                    <Link to='/result'><button onClick={submitHandler} >Submit</button></Link>
                </div>
                <div className="result">
                </div>

            </div>
        </div>
        <div  hidden={!resMarks}>

        
        <Result result={resMarks} grade = {grade} /></div>
</div>
    )
}

function Result({result , grade}) {


    return (
  
      <div>
     <div className="res-box" style={{display:'flex' , justifyContent:'center'}}>
      <table style={{border :' 1px solid black' , textAlign:' center', backgroundColor:'#ccc'}} width='500'>
      <tr style={{border :' 1px solid black' , padding: '50px'}}>
         <th>Your Obtained Percentage</th>
         <th>Your CGPA </th>
         <th>Your Grade</th>
      </tr>
     

        <tr style={{border :' 1px solid black'}}>
            <td>{result}%</td>
            <td>{result /9.5 }</td>
            <td>{grade}</td>
        </tr>
      </table>
     </div>
      </div>
    )
  }
  
  export{Result} ;


export default ReportCardContents;