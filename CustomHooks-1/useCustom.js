import { useEffect } from "react";

const Custom12=(count)=>{

    useEffect(()=>{
        document.title=`count-${count}`;
    },[count])
}
export default Custom12;