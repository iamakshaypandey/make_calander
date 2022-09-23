import React from 'react';
import { useEffect } from 'react';
import oneImg from '../images/assets/one.svg'
import twoImg from '../images/assets/two.svg'
import threeImg from '../images/assets/three.svg'
import fourImg from '../images/assets/four.svg'
import fiveImg from '../images/assets/five.svg'
import sixImg from '../images/assets/six.svg'
import sevenImg from '../images/assets/seven.svg'
import SearchDate from './SearchDate';


function Index() {
  

  const allmonth = ['January','Fubuary','March','April','May','Jun','July','Augesht','September','Octomber','Nuvmbar','December']
  const allweekday = ['Sun','Mon','Tue','Wed','Thu','Fri','Sut']
  

  let findday = new Date()
  let getmonth = allmonth[findday.getMonth()]
  let getyear = findday.getFullYear()
  let getweek = allweekday[findday.getDay()-1]
  let today = findday.getDate()
  let year = findday.getFullYear()
  let month = findday.getMonth()
  // eslint-disable-next-line
  let dateset = findday.setDate(1)


  let allday = findday.getDay()




  const prvDate = () =>{
    const preDate = new Date(year,month,0).getDate()
    return preDate
  }

  


  const EndDate = (year,month)=>{
    const endDate = new Date(year,month+1,0).getDate()
    return endDate
  }
  



 const manageDate = (today1,getweek1,getyear1,getmonth1) =>{
    
    
    let chekweek = document.querySelector('.calander')
    let createtd
    let datevalue
    

    
    let c = []
    let count =0
    for(let j = allday;j>0; j--){
      
      c.push(prvDate(year,month)-j+1)
  
    }

    for(let k = 0 ; k<c.length ; k++){
      
      createtd = document.createElement('td')
      createtd.classList.add('day')
      datevalue = document.createTextNode(c[k])
      createtd.appendChild(datevalue)
      chekweek.appendChild(createtd)

      
      count++
        
    }


    for(let i =1 ; i<=EndDate(year,month);i++){

      count++
      
      if(count%7===0){      
            createtd = document.createElement('td')
            createtd.classList.add('day')
            datevalue = document.createTextNode(i)
            createtd.appendChild(datevalue)
            chekweek.appendChild(createtd)
            const createtr = document.createElement('tr')
            createtr.classList.add('week')
            chekweek.appendChild(createtr)

            if(i===today){
              createtd.classList.add('today')
            }

          }else if(i===today){
            createtd = document.createElement('td')
            createtd.classList.add('today')
            datevalue = document.createTextNode(i)
            createtd.appendChild(datevalue)
            chekweek.appendChild(createtd)            
          }
          
          else{
  
            createtd = document.createElement('td')
            createtd.classList.add('day')
            datevalue = document.createTextNode(i)
            createtd.appendChild(datevalue)
            chekweek.appendChild(createtd)
  
          }
  
        
        }
    }
    
    
  useEffect(()=>{
    manageDate(today,getweek,getyear,getmonth)
    // eslint-disable-next-line
  },[])



  return (
   <>
    <div className='container'>
      <img src={oneImg}  className='set-position-1' alt="demo" />
      <div className='main-calander'>
        <div className='month'>{getmonth} {getyear}
        <SearchDate/>
        </div>  
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
      <img src={sixImg} className='set-position-6' alt="" />
      <img src={sevenImg} className='set-position-7' alt="" />
    </div>
   </>
  );
}

export default Index;
