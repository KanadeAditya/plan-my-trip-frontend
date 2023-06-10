import React from 'react'

function Post() {

    function submitEvent(e){
        e.preventDefault();
        let obj = {
            name :e.target.name.value,
            email :e.target.email.value,
            destination :e.target.destination.value,
            no_of_travellers :e.target.nooftravellers.value,
            budget_per_person :e.target.budget.value
        }
        let baseURL = `https://plan-my-trip-api.onrender.com/data`
        fetch(baseURL,{
            method:"POST",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
          }).then((res)=>{
            return res.json()
          }).then((data)=>{
            alert(data.msg)
            console.log(data.data)
          })
            
        console.log(obj)
    }

  return (
    <div>
        <form onSubmit={submitEvent}>
            <input placeholder='Name : ' type="text" id='name' required  />
            
            <input placeholder='Email Address :' type="text" id='email'  required />
            
            <select name="destination" id="destination">
        <option value="">Select Your Destination</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
           
            <input placeholder='No. of travellers : ' type="text" id='nooftravellers' required  />
            
            <input placeholder='Budget Per Person : ' type="text" id='budget'  required />
            <input type="submit" />

        </form>
    </div>
  )
}

export default Post