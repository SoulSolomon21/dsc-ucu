import { useState, useEffect } from "react";

export const useApi = (options, defaultValue) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://web-takehome-production.up.railway.app/api/signin', options);
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [options]);

    return [data, error];
};

export const useMyApi = (options, defaultValue) => {
    const [data, setData] = useState(() => {
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://web-takehome-production.up.railway.app/api/signin', options);
                    const json = await response.json();
                    setData(json);
                } catch (error) {
                    setError(error);
                }
            };
    
            fetchData();
        }, [options]);
    });

    const setApiData = (newData) => {
        try {
            
        } catch (err) {
            
        }
    }

    return [data, error];
};
