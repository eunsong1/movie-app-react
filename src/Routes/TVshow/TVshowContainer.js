import React, { useEffect,useState } from "react";
import { tvShowApi } from "../api";
import TVshowPresenter from "./TVshowpresenter"

const TVshowContainer=()=>{

    const [TVData, setTVData] = useState({
        topRated : null,
        popular : null,
        airingTody : null,
    })
    const [loading, setLonding] = useState(null);
    const [error, setError] = useState(null);
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
            setError("Can't find movie data" )
        }finally{
            setLonding(false)
        }
    }

    return(
        <TVshowPresenter TVD= {TVData} loading={loading} error={error}></TVshowPresenter>
    )
}
export default TVshowContainer;