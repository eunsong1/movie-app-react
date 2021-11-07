import React,{useEffect} from "react";


const DetailContainer=({detaildata, error, loading})=>{
    useEffect(()=>{
        console.log(detaildata)
    },[detaildata])
    return(
        "DetailContainer"
    )
}
export default DetailContainer;