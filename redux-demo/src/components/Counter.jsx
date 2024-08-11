import { useCounterValue, useCounterDispatch } from '../context/CounterContext'

const Display = () => {
  const counter = useCounterValue()
  return <div>{counter}</div>
}

const Button = ({ type, label }) => {
  const dispatch = useCounterDispatch()
  return <button onClick={() => dispatch({ type })}>{label}</button>
}

const Counter = () => {
  return (
    <div>
      <Display />
      <div>
        <Button type="INC" label="+" />
        <Button type="DEC" label="-" />
        <Button type="ZERO" label="0" />
      </div>
    </div>
  )
}

export default Counter
