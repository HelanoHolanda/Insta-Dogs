import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider = ({children}) => {
 
    const [user, setUser] = useState({})

   const putUserData = async infoUser =>  {
         setUser(infoUser)
         await localStorage.setItem('apiDogs',JSON.stringify(infoUser))
    }

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