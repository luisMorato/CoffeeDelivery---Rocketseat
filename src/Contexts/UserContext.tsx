import { createContext, ReactNode, useEffect, useState } from "react";
import { userProps } from "../@types/User";

interface userContextProps {
    userData: userProps | undefined,
    handleUserDataChange: (data: Omit<userProps, 'id'>) => void
}

export const UserContext = createContext({} as userContextProps);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<userProps>(() => {
        const storedData = localStorage.getItem('CoffeeDeliveryRocketseat - UserData 1.0.0')
        if(storedData){
            return JSON.parse(storedData)
        }

        return '';
    });

    const handleUserDataChange = (data: Omit<userProps, 'id'>) => {
        setUserData({
            id: String(Date.now() + Math.floor(Math.random() * 1000)),
            ...data
        });
    }

    useEffect(() => {
        localStorage.setItem('CoffeeDeliveryRocketseat - UserData 1.0.0', JSON.stringify(userData));
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, handleUserDataChange }}>
            { children }
        </UserContext.Provider>
    )
}