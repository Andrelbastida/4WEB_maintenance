import Image from "next/image";
import { NavBar } from "./navlink";

export function Aside(){
    return(

        <aside className="w-64 p-6 bg-white/30">
        <Image src={"/image/logo"} className="w-full"
        alt="Logo" width={300} height={300}/>
        
        <NavBar/>

      </aside>
    );
}