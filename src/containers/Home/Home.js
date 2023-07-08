import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Home.css";

export default function Home() {
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            if (res.status === 200) {
                setData(res.data)
            }
        })
    }

    useEffect(() => {
        fetchData(); 
    }, []) 

    return (
        <div className='home-page'>
            {
                data.length > 0 ? 
                    data.map((item) => {
                        return (
                            <div key={item.id} className='home-page-item'>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        )
                    })
                : <div>data not found</div>
            }
        </div>
    )
}
