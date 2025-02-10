import { useEffect, useRef, useState } from "react"

export const Component2 = () => {
    const abc = useRef()
    const a = ['a', 'b', 'c', 'd', 'e', 'f']

    const [bottle, setBottle] = useState();
    let item;

    useEffect(() => {
        setTimeout(() => {
            for (let i = 0; i < a.length; i++) {
                let item = a[i]
                setBottle(item)
                abc.current.value = bottle
            }
        }, 2000)
    }, [bottle])
    
    return  <>
        <input type="text" ref={abc}/>
        <input type="submit" />
    </>
}