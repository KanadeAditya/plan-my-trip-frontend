import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

function Retrieve() {
  const [Data, setData] = useState([])
  const [filter, setfilter] = useState(null)
  const [sort, setsort] = useState(null)
  const [UI, setUI] = useState(null)
  let baseURL = `https://plan-my-trip-api.onrender.com/data`
  let  clickHandler =(e)=>{
    // alert(e.target.dataset.id)

    fetch(baseURL+`/${e.target.dataset.id}`,{
      method:"DELETE",
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      alert(data.msg)
      if(!filter && !sort){
        FetchData(baseURL)
      }else if(!filter){
        FetchData(baseURL+`?sort=${sort}`)
      }else if(!sort){
        FetchData(baseURL+`?filter=${filter}`)
      }else{
        FetchData(baseURL+`?filter=${filter}&sort=${sort}`)
      }
    })


  }

  let FetchData =(url)=>{
    fetch(url)
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      setData(Data)
      let arr = data?.map((ele,ind)=>{
        // console.log(ele)
        return <Cards
        _id={ele._id}
        name ={ele.name}
        email ={ele.email}
        destination ={ele.destination}
        no_of_travellers ={ele.no_of_travellers}
        budget_per_person  ={ele.budget_per_person}
        clickHandler={clickHandler}
         />
      })
        setUI(arr)
    })
  }
  
  useEffect(() => {
    if(!filter && !sort){
      FetchData(baseURL)
    }else if(!filter){
      FetchData(baseURL+`?sort=${sort}`)
    }else if(!sort){
      FetchData(baseURL+`?filter=${filter}`)
    }else{
      FetchData(baseURL+`?filter=${filter}&sort=${sort}`)
    }
  }, [sort,filter])
  
   async function filterfunction(e){
    // await setfilter(e.target.value)
    setfilter(e.target.value)

  }

   function sortfunction(e){
     setsort(e.target.value)
    
  }

  return (
    <div>
      <div className='sortandfilter'>
        <select onChange={filterfunction} name="filter" id="filter">
        <option value="">Select Your Destination</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
        <select onChange={sortfunction} name="sort" id="sort">
        <option value="">Sort By Budget</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className='appendhere'>
        {UI}
      </div>
    </div>
  )
}

export default Retrieve