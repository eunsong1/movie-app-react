import React, { useEffect,useState } from "react";
import { tvShowApi } from "../api";
import TVshowPresenter from "./TVshowpresenter"

const TVshowContainer=()=>{

    const [TVData, setTVData] = useState({
        topRated : null,
        popular : null,
        airingTody : null,
        loading : true,
        error : null
    })
    useEffect(()=>{
        getTVData()
    },[])
    const getTVData = async ()=>{
        try{
            const {data: {results : topRated}} = await tvShowApi.topRated();
            const {data: {results : popular}} = await tvShowApi.popular();
            const {data: {results : airingTody}} = await tvShowApi.airingTody();
            console.log(airingTody)
            setTVData({
                ...TVData,
                topRated : topRated,
                popular : popular,
                airingTody : airingTody
            })
        }catch{
            setTVData({
                ...TVData,
                error :"Can't find TVshow data"
            })
        }finally{
            setTVData({
                ...TVData,
                loading :false
            })
        }
    }

    return(
        <TVshowPresenter TVD= {TVData}></TVshowPresenter>
    )
}
export default TVshowContainer;