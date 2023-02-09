import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {changeName} from "./../Redux/userSlice"
function Test4() {

    const data = useSelector((state) => state?.user)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>{data?.name}</h1>

      <button onClick={() => dispatch(changeName("guyhui"))}>click</button>
    </div>
  )
}

export default Test4
