import React, { useState, useEffect } from 'react'


const useRoute = paths => {
    const [ path, setPath ] = useState("")

    useEffect(() => {
        if(path === "/") {
            setPath(paths)
        } else {
            setPath(paths)
        }
    }, [])

    return path
}

export default useRoute