import React,{useState} from 'react';

function SearchDate() {

  
  const [Searchdate, setSearchdate] = useState('')
  
  // console.log(Searchdate,'Searchdate');
  

  
  const checkSearchDate = (e)=>{
    setSearchdate(e.target.value)
  }
  
  const SearchHandler = ()=>{
    const finddate = new Date(Searchdate)
    console.log(finddate);
  }


  return (
    <>
    <input className='date-input' onChange={checkSearchDate} placeholder='date/month/year' type="text" />  
    <button onClick={SearchHandler} >Search</button>    
    </>
  );
}

export default SearchDate;
