import { createContext, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props){
    const [counter, setCounter] = useState(99)
    const [shop_ar, setShopAr] = useState([
        {name: "milk",amount: 3,id:1},
        {name: "Chocolate milk",amount: 1,id:2},
        {name: "bamba",amount: 5,id:3}
    ]);

    const addProduct = (newItem) => {
        setShopAr([...shop_ar,newItem]);
    }

    const globalValue = {
        counter, setCounter,
        shop_ar, addProduct
    }

    return(
        <AppContext.Provider value={globalValue}>
            {props.children}
        </AppContext.Provider>
    )
}
