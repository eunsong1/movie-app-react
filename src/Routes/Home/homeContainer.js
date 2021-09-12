
import React, {useState, useEffect} from "react";
import { movieApi } from "../api";
import Homepresenter from "./homePresenter"

const Homecontainer=()=>{

    const [MVData, setMVData] = useState({
        nowPlaying : null,
        upcoming : null,
        popular : null,
        
    })
    const [loading, setLonding] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        getMoveData()
    },[])
    const getMoveData = async ()=>{
        setLonding(true);
        try{
           const {data : {results : nowplaying}}= await movieApi.nowPlaying();
           const {data : {results : upcoming}} = await movieApi.upcoming();
           const {data : {results : popular}} = await movieApi.popular();
            console.log(nowplaying);
        //    console.log(upcoming);
        //    console.log(popular);
           setMVData({
               ...MVData,
               nowPlaying : nowplaying,
               upcoming,
               popular
           })
        }
        catch{
            setError("Can't find movie data" )
            setMVData({
                ...MVData,
               
            })
        }finally{
          setLonding(false);
        }
        
    }


    return(
        <Homepresenter moviedata = {MVData} loading={loading} error={error}></Homepresenter>
    )
}
export default Homecontainer;