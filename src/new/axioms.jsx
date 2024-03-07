import React, { useState, useEffect} from "react";
import axios from "axios";

function FetchUsingAsync() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);

    async function fetchInfo () {
        try{
            const response = await axios.get(url)
            setData(response.data);
        }
        catch(error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="App">
            <h1 style={{color: "green"}}>using Async with Axios Library to Fetch Data</h1>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <div
                        style={{
                            width: "15em",
                            backgroundColor: "#CD8FFD",
                            padding: 2,
                            borderRadius: 10,
                            marginBlock: 10,
                        }}
                        >
                            <p style={{ fontSize:20, color: 'white'}}>
                                {dataObj.name}
                            </p>
                        </div>
                    );
                })}
            </center>
        </div>
    );
}
export default FetchUsingAsync;