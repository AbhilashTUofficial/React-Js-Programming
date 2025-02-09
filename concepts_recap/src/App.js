import React, { useCallback, useMemo, useState } from 'react';
import Counter from './components/Counter';
import useRandomNumber from './hooks/useRandomNumber';
import { Link } from 'react-router-dom';
import { decrementCount, incrementCount } from './Utils/CounterFunctions';


function App() {
  
  const [count, setCount] = useState(useRandomNumber());

  const printCount1=useCallback(()=>{
    console.log(`useCallback: ${count}`)
  },[count])

  const calculateWithoutMemo=()=>{
    console.log("Recalculating without memo")
    return count+10;
  }

  const calculateWithMemo=useMemo(()=>{
    console.log("Recalculating with memo")
    return count+10;
  },[count])

  console.log(calculateWithMemo)
  console.log(calculateWithoutMemo())

  printCount1();



  return (
    
    <div className='app-container'>
      <Counter count={count} incrementCount={()=>incrementCount({setCount})} decrementCount={()=>decrementCount({setCount})} />
      <div className='nav'>
        <Link className='pages' to="/page1">Page1</Link>
        <Link className='pages' to="/page2">Page2</Link>

      </div>
    </div>
  );
}

export default App;
