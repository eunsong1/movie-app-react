import React,{useEffect,useState} from "react";
import { movieApi,tvShowApi } from "../api";
import DetailPresenter from "./DetailPresenter"

const DetailContainer=({match: {params : {id}, path},history : {push}})=>{

    useEffect(()=>{
        if (isNaN(id)){
            return push("/home")
        }
        
        getDetilData();
    },[id])

    const [detaildata, setdetaildata]=useState(null);
    const [Loading, setLoading]=useState(true);
    const [error,seterror]=useState(null);

    const getDetilData= async()=>{
        
        setLoading(true);
        try{
            if(path.includes("/movie")){
                const {data} =await movieApi.detail(id)
                setdetaildata(data);   
            }else if(path.includes("/tv")){
                const {data} = await tvShowApi.detail(id);
                setdetaildata(data);
            }
        }
        catch{
            seterror("Can't find anyting...");
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <DetailPresenter detaildata={detaildata} error={error} loading={Loading}></DetailPresenter>
    )
}
export default DetailContainer;