import React from "react";

interface CardInterface {
    color?:string;
    qty?:number;
    text?:string;
    icon?:React.ReactNode;
}

export function Card({color, qty, text, icon}: CardInterface) {

    return(

        <div className={`${color} p-6 flex gap-2 rounded-xl`}>
              <div className="flex flex-col flex-1">
                <strong className="text-3xl font-semibold">{qty}</strong>
                <span className="text-sm">{text}</span>
              </div>
              {icon}
        </div>
    )
}