import React from 'react'
import {useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function Page2() {
  const params = useParams();
  const data=useSelector(state=>state.app);
  console.log(data)
  return (
    <div className='app-container'>
      {params.id}
    </div>
  )
}

export default Page2