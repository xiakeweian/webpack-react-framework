import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import homeReducer, { initState, incremented, decremented } from '@/reducers/homeReducer'
import { Button, Input } from 'antd'
import Event from './Event'

let i = 0
const ViewApp = () => {
  const posts = useSelector((state) => state.posts)
  const [list, setList] = useState([])

  // const [count, setCount] = useState(value)
  const dispatch = useDispatch()

  const add = () => {
    console.log(list, i, 'sssslist')
    setList(
      list.concat(
        <button key={i} onClick={add}>
          {i++}
        </button>
      )
    )
    // setList(btnList => list.concat(<button key={i} onClick={add}>{i++}</button>))
  }

  const handleClick = () => {
    dispatch(incremented(1))
  }
  console.log(list, 'ddlist')

  return (
    <div className='App'>
      hello world!
    </div>
  )
}
export default ViewApp
