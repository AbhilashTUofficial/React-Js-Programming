import React from 'react'
import {useParams} from "react-router-dom";
function Page2() {
  const params = useParams();
  return (
    <div className='app-container'>
      {params.id}
    </div>
  )
}

export default Page2