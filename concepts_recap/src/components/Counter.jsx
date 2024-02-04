import React from 'react'

function Counter({count,incrementCount, decrementCount}) {
  return (
    <div className='container'>
      <div data-testid={"count"} className='count'>
        {count}
      </div>
      <div className='btns'>
        <div className='increament btn' onClick={()=>incrementCount()}>+</div>
        <div className='decreament btn' onClick={()=>decrementCount()}>-</div>
      </div>
    </div>
  )
}

export default Counter