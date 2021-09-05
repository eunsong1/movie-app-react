
import React, {useState, useEffect} from "react";
import { movieApi } from "../api";
import Homepresenter from "./homePresenter"

const Homecontainer=()=>{

    const [MVData, setMVData] = useState({
        nowPlaying : null,
        upcoming : null,
        popular : null,
        loading : true,
        error : null
    })

    useEffect(()=>{
        getMoveData()
    },[])
    const getMoveData = async ()=>{
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
               upcoming : upcoming,
               popular : popular
           })
        }
        catch{
            setMVData({
                ...MVData,
                error :"Can't find movie data" 
            })
        }finally{
            setMVData({
                ...MVData,
                loading : false
            })
        }
        
    }


    return(
        <Homepresenter moviedata = {MVData}></Homepresenter>
    )
}
export default Homecontainer;