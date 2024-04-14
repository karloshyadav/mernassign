import { useEffect, useState } from 'react';
import { createContext } from "react";

const Context = createContext();

const SharedState = (props) => {

    return (
        <Context.Provider value={{
            
        }}>
            {props.children}

        </Context.Provider>
    );
};

export { Context, SharedState };