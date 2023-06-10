import React from 'react'

function Cards({_id,name, email, destination,  no_of_travellers, budget_per_person,clickHandler}) {
    // console.log(_id,name, email, destination,  no_of_travellers, budget_per_person)
  return (
    <div className='cards' key={_id}>
        <h2>Name : {name}</h2>
        <h2>Email Address : {email}</h2>
        <h2>Destination : {destination}</h2>
        <h4>No. of travellers : {no_of_travellers}</h4>
        <h4>Budget Per Person : {budget_per_person}</h4>
        <button data-id={_id} onClick={clickHandler} className="delete">DELETE</button>
    </div>
  )
}

export default Cards