import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
 
    const [user, setUser] = useState({}) // estados dos usuarios
 
    // funcao que recebe e seta os dados no localStorage
   const putUserData = async infoUser =>  {
         setUser(infoUser)
         await localStorage.setItem('apiDogs',JSON.stringify(infoUser))
    }

    // funcao que pega os dados no localStorage
    useEffect(() => {
        const LoadUserData = async () => {
            const infoUser = await localStorage.getItem('apiDogs')

            if (infoUser){
                setUser(JSON.parse(infoUser))    
            }
        
        }
        LoadUserData()
    }, [])

    return (
         <UserContext.Provider value={{putUserData, user}}>
            {children}
         </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext)