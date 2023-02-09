import React, {useContext} from 'react';
import {store} from'../Context/Store'
//import {useStore} from'../Context/Store'

function Test2() {

  const [data, dispatch] = useContext(store)


  return (
    <div>
      <h1>{data?.person1}</h1>
      <h1>{data?.person2}</h1>
      <h1>{data?.person3}</h1>

      <button onClick={() => dispatch({type: "loginPerson1"})}>Login1</button>
    </div>
  );
}

export default Test2;
