import React,{useEffect,useState} from "react";
import { movieApi,tvShowApi } from "../api";
import DetailPresenter from "./DetailPresenter"
import {Movie_type, TV_show} from "../../Compornent/Type"

const DetailContainer=({match: {params : {id}, path},history : {push}})=>{

    useEffect(()=>{
        if (isNaN(id)){
            return push("/home")
        }
        
        getDetilData();
    },[id])

    const [detaildata, setdetaildata]=useState(null);
    const [type, setType] =useState(null);
    const [Loading, setLoading]=useState(true);
    const [error,seterror]=useState(null);

    const getDetilData= async()=>{
        
        setLoading(true);
        try{
            if(path.includes("/movie")){
                const {data} =await movieApi.detail(id)
                setdetaildata(data);
                setType(Movie_type);
            }else if(path.includes("/TV")){
                const {data} = await tvShowApi.detail(id);
                setdetaildata(data);
                setType(TV_show);
            }
        }catch{
            seterror("Can't find anyting...");
        }finally{
            setLoading(false);
        }
    }
    return(
        <DetailPresenter detaildata={detaildata} error={error} loading={Loading} type ={type}></DetailPresenter>
    )
}
export default DetailContainer;