import React from 'react';
import { useState,useEffect } from 'react';

function Index() {

  // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const alldate = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
  // const d = new Date();
  // let day = days[d.getDay()];
  // let date = alldate[d.getDate()-1]
  // console.log(day,date);

  // useEffect(()=>{
  //   // const calander = document.querySelector('all-date')
  //   // const d = document.createElement('tr')
  //   // calander.appendChild(d)
  // },[])

  const findday = new Date()
  const allmonth = ['January','Fubuary','March','April','May','Jun','July','Augesht','September','Octomber','Nuvmbar','December']
  const getmonth = allmonth[findday.getMonth()]
  const getyear = findday.getFullYear()
  const allweekday = ['Mon','Tus','Wed','Thu','Fri','Sut','Sun']
  const getweek = allweekday[findday.getDay()]
  const today = findday.getDate()
  console.log(today);


  useEffect(()=>{
    console.log('useEffect');
    let date =0
    let createTable =  document.createElement('table')
    createTable.classList.add('calander')

    // console.log(date1);
    for(let i = 0 ; i< 6 ; i ++){
      var row = document.createElement("tr");
      row.classList.add('week')
      date++
      for(let j = 0 ;j<7 ; j++){
        // console.log(j);
        if (i === 0 && j < findday) {
          const col =  document.createElement('td')
          col.classList.add('day')
          const date1 = document.createTextNode('')
          // col.textContent=date
          col.appendChild(date1)
          row.appendChild(col)
      }else{
        const col =  document.createElement('td')
        col.classList.add('day')
        const date1 = document.createTextNode(date)
        // col.textContent=date
        col.appendChild(date1)
        row.appendChild(col)

      }

      
    }
       // appending each row into calendar body.
      }
      createTable.appendChild(row)
      const createTable2 = document.querySelector('.main-calander')
      createTable2.appendChild(createTable)
      // console.log(createTable);
  },[])



  return (
   <>
   {
     console.log('render')
   }
    <div className='container'>
      <img src="" alt="" />
      <div className='main-calander'>
        <div className='month'>{getmonth} {getyear}</div>
        <table className='calander'>
         <tr className='week'>
           {
             allweekday.map((Weeks)=> <th className='var'>{Weeks}</th>)
           }
         </tr>
         {/* <tr className='all-date'>
           {
             alldate.map((i)=>{
               return (i && i%7===0 ? <td className='day'>{i}</td> : 
                <tr className='all-date'><td className='day'>{i}</td></tr>
               )
             }

            )
           }
         </tr> */}
        </table>
      </div>
    </div>
   </>
  );
}

export default Index;
