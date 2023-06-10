import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to={'/PostData'} ><h4>Post Data</h4></Link>
        <Link to={'/RetrieveData'} ><h4>Retrieve Data</h4></Link>
    </div>
  )
}

export default Navbar