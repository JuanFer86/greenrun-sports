import { useLayoutEffect, useState } from "react"


export const useWindowSize = (): number[] => {

    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        window.addEventListener('resize', () =>{
            updateSize( setSize );

            return () => window.removeEventListener('resize', updateSize);
        })
        updateSize(setSize);
        
    }, [])

    return size;
}


const updateSize = (setSize: any): void => {

    const { innerWidth: width, innerHeight: height } = window

    setSize([width, height])
}