import { useState, useEffect } from "react";

export const useApi = (options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => await axios.post('https://web-takehome-production.up.railway.app/api/signin', myData).then(function (response) {
            console.log(response)
            if (response.data.memberData) {
                alert("Successfully Signed In")
                setData(response.data.memberData._doc)
            } else {
                setData(null)
                setError(response.message)
            }
        })

        fetchData();
    }, [options]);

    return [data, error];
};

export const useMyApi = () => {
    const [data, setData] = useState({});

    const setApiData = (newData) => {
        if (newData) {
            try {
                useEffect(() => {
                    const fetchData = async () => {
                        try {
                            const response = await fetch('https://web-takehome-production.up.railway.app/api/signin', newData);
                            const json = await response.json();
                            setData(json);
                        } catch (error) {
                            setError(error);
                        }
                    };
                    fetchData();
                }, [data]);
            } catch (err) {
                setData(null)
            }
        } else {
            setData(null)
        }
    }

    return [data, setApiData];
};
