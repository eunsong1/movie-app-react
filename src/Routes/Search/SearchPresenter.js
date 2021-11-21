import React,{useEffect} from "react";
import Section from"../../Compornent/Section";
import styled from "styled-components";
import Loader from "../../Compornent/Loader";
import Poster from "../../Compornent/Poster";
import { TV_show, Movie_type } from "../../Compornent/Type";
import Massage from "../../Compornent/message";

const Container = styled.div`
    padding : 20px;
`;
const Form = styled.form`
    width : 100%;
    margin-bottom : 50px;
`;
const Input = styled.input`
    all : unset;
    width : 100%;
    height : 30px;
    font-size : 20px;
    
`;


const SearchPresenter=({handleSubmit , searchData :{movieData, tvData}, error, loading})=>{

console.log(movieData)


    return(

    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movie, TVshow"></Input>
        </Form>
        {loading===true ?<Loader/> :
        <>
            {movieData &&movieData.length >0 &&
            <Section title ="Movie Results">
                {movieData.map(movie =>
                    <Poster 
                    id={movie.id} 
                    type={Movie_type}
                    key={movie.id} 
                    title = {movie.title} 
                    image={movie.poster_path}
                    rating={movie.vote_average} 
                    year = {movie.release_date && movie.release_date.split("-")[0]}
                    ></Poster>
                )}
            </Section>
            }
            {tvData && tvData.length > 0 &&
            <Section title ="TVshow Results">
            {tvData.map(tv=>
                    <Poster
                        id={tv.id}
                        type={TV_show}
                        key={tv.id}
                        title={tv.name}
                        image={tv.poster_path}
                        rating={tv.vote_average}
                        year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                    ></Poster>
            )}
            </Section>
            }
            {error && <Massage text={error} color="red"></Massage>}
            {tvData && movieData && tvData.length === 0  && movieData.length===0 &&
            <Massage text="No Search Result..." color="yellow"></Massage>}
             
        </>
        }
        

    </Container>
    )
}
export default SearchPresenter;