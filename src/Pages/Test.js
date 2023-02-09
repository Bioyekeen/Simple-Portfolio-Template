import React, { useReducer } from 'react'

function Test(){ 

const reducer = (state, action) =>{
    switch(action.add){
        case "address1":
        return {...state, order1:"delivery 1 successful"}
        case "address2":
        return {...state, order2:"delivery 2 successful"}
        case "address3":
        return {...state, order3:"delivery 3 successful"}
        default:
            return state
    }
}
const  [data, dispatch] = useReducer(reducer, {order1: "rice", order2: "beans", order3: "swallow"})
    return (
        
        <div className=''>
            <h1>{data?.order1}</h1>
            <h1>{data?.order2}</h1>

            <h1>{data?.order3}</h1>
            <button className='btn btn-md btn-primary' onClick={() => dispatch({add:"address1"})}>changeNum</button>
            <button className='btn btn-md btn-danger' onClick={() => dispatch({add:"address2"})}>changeAge</button>
            <button className='btn btn-md btn-danger' onClick={() => dispatch({add:"address3"})}>changeName</button>
    
            
        </div> 
      )
    }
 
  export default Test

  /*
function Test(){ 


const [num, setNum] = useState(0)
const [age, setAge] = useState("")
const [name, setName] = useState("")

const handleNum = () =>{
    setNum(num + 1)
}
const handleAge = () =>{
    setAge(20)
}
const handleName = () =>{
    setName("new name")
}

    return (
        
        <div className=''>
            <h1>{num}</h1>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button className='btn btn-md btn-primary' onClick={handleNum}>changeNum</button>
            <button className='btn btn-md btn-danger' onClick={handleAge}>changeAge</button>
            <button className='btn btn-md btn-danger' onClick={handleName}>changeName</button>
    
            
        </div> 
*/