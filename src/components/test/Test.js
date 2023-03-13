import React, { useCallback, useMemo, useState } from 'react'
import Button from '../UI/Button/Button'
import classes from './Test.module.css';


export default function Test() {
    const [state, setState] = useState(false)

    const handelClick = useCallback(()=>{
            // setState((prev)=>!prev)
            setState(!state)

             console.log("tmam" + " ===> " + state  )
    },[])
    const rnd = Math.random();
    const shouldRunMemo = ()=>{
     
        console.log(rnd + " ===> " + state)
        return rnd < .5;
    }
    const runMemo = ()=>{
      console.log("runMemo" + " ===> " + state  )

        return rnd < .5 ? [1,2,3] : [5,6,7]
    }
const arr = useMemo(()=>runMemo(), [shouldRunMemo() ])
// const arr = useMemo(()=>[1,2,3], [ ])

   
  return (
    <div>
        <Button className={classes.test} onClick={handelClick} arr={arr} > TEST </Button>
    </div>
  )
}
