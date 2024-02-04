export const incrementCount = ({setCount}) => {
    setCount(prevCount => prevCount + 1);
  };

export const decrementCount = ({setCount}) => {
    setCount(prevCount => prevCount - 1);
  };