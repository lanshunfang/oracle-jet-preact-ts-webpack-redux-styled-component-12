import { h } from "preact";

import { useState } from 'preact/hooks';

import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import componentStrings = require("ojL10n!./resources/nls/CounterStrings");

import {
  decrement,
  increment, incrementAsync, incrementByAmount, incrementIfOdd,
  selectCount
} from './counterSlice';

const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;


export function Counter(props: {
  name: string
}) {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <Title>My name is {props.name}. {JSON.stringify(componentStrings)}</Title>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount((e.target as any).value)}
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}



export default Counter;