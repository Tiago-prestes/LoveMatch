import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    
    useEffect(() => {
        getData()
    },[])

    const getData = () => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data.profile)
                console.log("UseRequest", setData)
            })
            .catch((err) => {
                console.log(err.response)
                alert('Ocorreu um erro!')
            })
    }

    return (data)
    // 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/matches'
    // 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/clear'

    // const resetMatches = () => {
    //     axios
    //         .put()
    //         .then((res) => {
    //             renderProfile()
    //         })
    //         .catch((err) => {
    //             console.log(err.response)
    //         })
    // }
}