import React, { useCallback, useState } from "react";


const useFeatch = (props)=>{
    
        const [isLoading, setIsLoading]  = useState(false)
        const [error, setError]  = useState(null)


    const sendRequest = useCallback(async(configRequest , fun)=>{
        setIsLoading(true)
        setError(null)
        try{
   let response = await fetch( configRequest.url ? configRequest.url : "https://reacttest-dd74a-default-rtdb.firebaseio.com/meals.json", {
    method: configRequest.method ? configRequest.method : 'GET',
    headers:  configRequest.headers ? configRequest.headers : {},
    // headers:  configRequest.headers ? configRequest.headers : {'Content-Type': 'application/json' },
    body: configRequest.body ?  JSON.stringify(configRequest.body) : null
    
  });

  // let response = await fetch( "https://reacttest-dd74a-default-rtdb.firebaseio.com/meals.json", {
  //   method : "GET",
  //   headers : {},
  //   body : null
  //     });

  if(!response.ok){
    throw new Error (" SERVER ERROR : cannot featch data")
  }
      let result = await response.json();
      console.log(result)
  // let result = await response.json();
  // console.log(result.meals)
  fun(result)

        }
        catch(error){
            console.log(error)
        // setError('Something went wrong!');
        setError(error.message || 'Something went wrong!');


        }
  setIsLoading(false)

    },[])

  return {
    sendRequest,
    isLoading,
    error
  }
}

export default useFeatch