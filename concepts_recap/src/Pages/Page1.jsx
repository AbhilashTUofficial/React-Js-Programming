import React from 'react'
import {Link} from "react-router-dom";

function Page1() {
  return (
    <div className='app-container'>
      <div className='nav'>
      <Link className='pages' to={"/page2/1"}>Subpage 1</Link>
      <Link className='pages' to={"/page2/2"}>Subpage 2</Link>
      <Link className='pages' to={"/page2/3"}>Subpage 3</Link>
      <Link className='pages' to="/">Home</Link>

      </div>
    </div>
  )
}

export default Page1