import { createContext } from "react"

interface cityState{
    city:string
}

const cityDefaultState: cityState ={
    city:''
}

export const CityContext = createContext(cityDefaultState)