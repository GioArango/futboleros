import { useEffect, useState } from "react";

export const useGetTime = () => {

    const [year, setYear] = useState();
    
    useEffect(() => {
      getCurrentYear();
    }, []);

    const getCurrentYear = () => {
        let actuallyYear = new Date().getFullYear();
        setYear(actuallyYear);
    }
    
    return {
        year
    }
}
