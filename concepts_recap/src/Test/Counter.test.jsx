import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
import { incrementCount } from '../Utils/CounterFunctions';


describe('Counter Component', () => {
  it('renders the count correctly', () => {
    const { getByTestId } = render(<Counter count={5} />);
    const countElement = getByTestId('count');
    expect(countElement.textContent).toBe('5');
  });

  it('calls incrementCount function when + button is clicked', () => {
    const incrementCountMock = jest.fn();
    const { getByText } = render(<Counter count={0} incrementCount={incrementCountMock} />);
    const incrementButton = getByText('+');
    fireEvent.click(incrementButton);
    expect(incrementCountMock).toHaveBeenCalledTimes(1);
  });

  it('calls decrementCount function when - button is clicked', () => {
    const decrementCountMock = jest.fn();
    const { getByText } = render(<Counter count={0} decrementCount={decrementCountMock} />);
    const decrementButton = getByText('-');
    fireEvent.click(decrementButton);
    expect(decrementCountMock).toHaveBeenCalledTimes(1);
  });

});
