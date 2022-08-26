import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Single_Product_Page(){
    const [data,setData] = useState({});
    const param = useParams();
    useEffect(()=>{
        axios.get(`https://nordstromrackproject.herokuapp.com/allactivewear/${param.id}`)
        .then((res)=>{
            console.log(res.data);
            setData(res.data);
        })
    },[])
    // setTimeout(()=>{console.log(data)},3000)
    return (
        <div>
            Single Product
        </div>
    )
}