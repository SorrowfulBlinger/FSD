import { useEffect, useState } from "react";
import { BackendData } from "../types/backendDataType";

// Custom React hook every 5 mins simulate n/w call by delay and some resp data
export function useBackendFetch(): BackendData {
    const initialResponse = {
        'dataN': 0,
        'data': '',
        'loading': true
    }
    // If using objects in setstate make sure u create another and then set els eit ont reflect
    const [response, setResponse] = useState(initialResponse)
    let loading: boolean = true;

    useEffect(() => {
        console.log('resp updated')
    }, [response])

    useEffect(() => {
        setInterval(() => {
            setTimeout(() => {
                loading = false;
                let initialResponse1:BackendData = {
                    data:Math.random().toString(36).slice(2, 10), 
                    dataN:Math.random() * 10 , 
                    loading:false
                };
                setResponse(initialResponse1)
            }, Math.random() * 2000);
        }, 10000)
    }, [response])

    return response
}
