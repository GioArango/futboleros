import { useEffect, useState } from "react";

export const useGetTime = () => {

    const [year, setYear] = useState();
    
    useEffect(() => {
      getFecha();
    }, []);

    const getFecha = () => {
        let actuallyYear = new Date().getFullYear();
        setYear(actuallyYear);
    }
    
    return {
        year
    }
}
