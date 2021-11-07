
import React,{useState} from "react";
import { movieApi, tvShowApi } from "../api";
import SearchPresenter from "./SearchPresenter"
const SearchContainer=()=>{

    const [searchdata,setsearchdata] =useState({
        movieData : null,
        tvData : null
    })
    const [loading, setloading] = useState(null);
    const [error,seterror]= useState(null);
    const handleSubmit = e=>{
        e.preventDefault();
        let keyword = e.target[0].value;
        getSearchData(keyword);
    }
    const getSearchData = async (keyword)=>{

        setloading(true);

        try{
             const{data : {results : moviedata}} = await movieApi.search(keyword);
             const{data : {results : TVdata}} = await tvShowApi.search(keyword);
             setsearchdata({
                 movieData : moviedata,
                 tvData : TVdata
             })
        }catch{
            seterror("Can't find")
        }finally{
            setloading(false);
        }
    }

    return(
        <SearchPresenter
        handleSubmit={handleSubmit}
        searchData={searchdata} 
        error={error} 
        loading={loading}>
            
        </SearchPresenter>
    )
}
export default SearchContainer;