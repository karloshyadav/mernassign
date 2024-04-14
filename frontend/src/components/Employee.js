import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Employee() {
    const [results, setResults] = useState({ data: {} })
    useEffect(() => {
        axios.get('http://localhost:9000/list').then(res => {
            setResults({ data: res.data })
        })
        console.log(results.data)

    },[])
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">mobile</th>
                        <th scope="col">designation</th>
                        <th scope="col">gender</th>
                        <th scope="col">image</th>
                    </tr>
                </thead>
                <tbody>
                    {results.data.map && results.data.map(data=>(
                    <tr>
                        <th scope="row">{data.name}</th>
                        <td scope="row">{data.username}</td>
                        <td scope="row">{data.phone}</td>
                        <th scope="row">{data.designation}</th>
                        <th scope="row">{data.gender}</th>
                        <th scope="row">{data.image}</th>
                        

                    </tr>
                    ))}

                    
                </tbody>
            </table>
        </div>
    )
}
