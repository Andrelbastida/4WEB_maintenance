import React from "react";

interface botaoInterface{
    color?:string;
    text?:string; 
}

export function BotaoBtn({color, text}: botaoInterface){
    return(
        <button className={`text-${color} botao-data `}>{text}</button>
        
    )
}