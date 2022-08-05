import { useState } from "react"

export const useLoading =(calback)=>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
   
    const fetching = async()=>{
        try{
            setIsLoading(true)
            await calback()
        }
        catch(e){
            setError(e.massage)
        }
        finally{            
            setTimeout(() =>{
                setIsLoading(false)
            },500)
        }
    }
    return [fetching,isLoading,error]
}