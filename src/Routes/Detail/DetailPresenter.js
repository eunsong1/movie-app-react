import React,{useEffect} from "react";
import styled from "styled-components";
import Loader from "../../Compornent/Loader";

const Container = styled.div`
    
    width : 100%;
    position : relative;
    height : calc(100vh - 50px);
    padding : 50px;
`

const BackDrop = styled.div`
    background-image : url(${props=>props.image});
    background-position : center center;
    background-size : cover;
    position : absolute;
    top : 0;
    left : 0;
    height : 100%;
    width : 100%;
    z-index : -1;
    opacity : 0.5;
    filter : blur(3px);
`

const ContentBox = styled.div`
    z-index : 0;
    width : 100%;
    height : 100%;
    display : flex;
    position : relative;
`

const Cover = styled.div`
    background-image : url(${props=>props.image});
    background-size : cover;
    width : 30%;
    height : 70%;
    background-position : center center;
    position : relative;
` 
const Data = styled.div`
    width : 70%;
    margin-left : 50px;
`
const Title = styled.h3`
    font-size : 50px;
    margin : 50px;
`
const InforBox =styled.div`
    font-size : 15px;
`
const InforItem =styled.span`

`
const Divider = styled.span`
    margin : 0 3px;
`
const Overview = styled.p`
    margin-top : 10px;
    line-height : 1.3;
    font-size : 15px;
    opacity : 0.7;
    width : 50%;
`
const image_prefix = "https://image.tmdb.org/t/p/original"

const DetailContainer=({detaildata, error, loading, type})=>{
    useEffect(()=>{
        console.log(detaildata)
    },[detaildata])
    return(
        <>
        {loading ? <Loader /> : 
            <Container>
                <BackDrop image={detaildata.backdrop_path !=null ? `${image_prefix}${detaildata.backdrop_path}` : `${image_prefix}${detaildata.poster_path}`  }></BackDrop>
                <ContentBox>
                    <Cover image={detaildata.poster_path ? `${image_prefix}${detaildata.poster_path}` : require("../../Assets/not img.png").default }></Cover>
                    <Data>
                        <Title>{detaildata[type.title]}</Title>
                        <InforBox>
                            <InforItem>{detaildata[type.date]}</InforItem>
                            <Divider> ⫶⫶ </Divider>
                            <InforItem>{Array.isArray(detaildata[type.runningTime]) ? detaildata[type.runningTime][0] : detaildata[type.runningTime]}m</InforItem>
                            <Divider> ⫶⫶ </Divider>
                            <InforItem>{detaildata.genres && detaildata.genres.map(genres=>genres.name).join(" & ")}</InforItem>
                        </InforBox>
                        <Overview>{detaildata.overview}</Overview>
                    </Data>
                </ContentBox>
            </Container>
        }
        </>
    )
}
export default DetailContainer;