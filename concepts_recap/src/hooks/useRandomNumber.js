import { useState } from 'react';


function useRandomNumber() {


  return  Math.floor(Math.random() * 11);
}

export default useRandomNumber;
