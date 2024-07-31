import { useEffect, useState } from "react"

export const UseLocalStorage = (key: string) => {
    const [item, setItem] = useState(() => {
        return JSON.parse(localStorage.getItem(key) || '') || [];
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(item));
    }, [key, item]);

    return {
        setItem,
        item
    }
}