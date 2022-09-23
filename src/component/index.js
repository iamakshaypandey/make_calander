import React from 'react';
import { useState,useEffect } from 'react';
import oneImg from '../images/assets/one.svg'
import twoImg from '../images/assets/two.svg'
import threeImg from '../images/assets/three.svg'
import fourImg from '../images/assets/four.svg'
import fiveImg from '../images/assets/five.svg'
import sixImg from '../images/assets/six.svg'
import sevenImg from '../images/assets/seven.svg'


function Index() {

  const [weekday,setWeekday] = useState('')
  console.log(weekday);

  const alldate = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  const allmonth = ['January','Fubuary','March','April','May','Jun','July','Augesht','September','Octomber','Nuvmbar','December']
  const allweekday = ['Mon','Tus','Wed','Thu','Fri','Sut','Sun']
  

  const findday = new Date()
  const getmonth = allmonth[findday.getMonth()]
  const getyear = findday.getFullYear()
  const getweek = allweekday[findday.getDay()]
  const today = findday.getDate()
  




  const manageDate = () =>{
    let len = 0
    let chekweek = document.querySelector('.calander')
    let createtd
    let datevalue
    for(let i = 0 ; i < 6 ; i ++){
      for(let j = 0 ; j<5 ; j ++){

        if(alldate[len]%7===0){
          console.log(alldate[len],'chek');
          createtd = document.createElement('td')
          createtd.classList.add('day')
           datevalue = document.createTextNode(alldate[len])
          createtd.appendChild(datevalue)
          chekweek.appendChild(createtd)
          
          const createtr = document.createElement('tr')
          createtr.classList.add('week')
          chekweek.appendChild(createtr)
        }else if(alldate[len]===today){
          console.log(alldate[len],'chek');
          createtd = document.createElement('td')
          createtd.classList.add('today')
          datevalue = document.createTextNode(alldate[len])
          createtd.appendChild(datevalue)
          chekweek.appendChild(createtd)
          console.log(today,'date');
        }
        
        else{
          console.log(alldate[len]);
          createtd = document.createElement('td')
          createtd.classList.add('day')
          datevalue = document.createTextNode(alldate[len])
          createtd.appendChild(datevalue)
          chekweek.appendChild(createtd)
        }
        len++
      }
    }
  }

  useEffect(()=>{
    manageDate()
  },[])



  return (
   <>
   {
     console.log('render')
   }
    <div className='container'>
      <img src={oneImg}  className='set-position-1' alt="demo" />
      <div className='main-calander'>
        <div className='month'>{getmonth} {getyear}</div>
        <table className='calander'>
         <tr className='week'>
           {
             allweekday.map((Weeks,i)=> <th key={i} className='var'>{Weeks}</th>)
           }
         </tr>
        </table>
      </div>  
      <img src={twoImg} className='set-position-2' alt="" />
      <img src={threeImg} className='set-position-3' alt="" />
      <img src={fourImg} className='set-position-4' alt="" />
      <img src={fiveImg} className='set-position-5' alt="" />
      <img src={sevenImg} className='set-position-6' alt="" />
    </div>
   </>
  );
}

export default Index;
