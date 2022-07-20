import { PokeContext } from "../context/PokeContext";
import { useState } from "react";


export const PokeProvider = (props) => {

    const [teste, setTeste] = useState('')


    return <PokeContext.Provider value={{}}>
        {props.children}
    </PokeContext.Provider>
}

