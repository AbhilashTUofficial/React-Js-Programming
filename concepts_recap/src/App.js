import React, { useCallback, useMemo, useState } from 'react';
import Counter from './components/Counter';
import useRandomNumber from './hooks/useRandomNumber';
import { Link } from 'react-router-dom';


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

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    console.log("sfd")
    setCount(prevCount => prevCount - 1);
  };

  return (
    
    <div className='app-container'>
      <Counter count={count} incrementCount={incrementCount} decrementCount={decrementCount} />
      <div className='nav'>
        <Link className='pages' to="/page1">Page1</Link>
        <Link className='pages' to="/page2">Page2</Link>

      </div>
    </div>
  );
}

export default App;
