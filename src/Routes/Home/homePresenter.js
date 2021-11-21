import React,{useEffect} from "react";
import Loader from  "../../Compornent/Loader"
import styled from "styled-components";
import Section from "../../Compornent/Section";
import Poster from "../../Compornent/Poster";
import { Movie_type } from "../../Compornent/Type";
import Message from "../../Compornent/message"
const Container = styled.div`

`;

const Homepresenter=({moviedata:{nowPlaying, popular, upcoming}, loading, error})=>{

    

    return(
        <>
        {loading ? <Loader /> :
            <Container>
                {nowPlaying && nowPlaying.length > 0 &&(
                    <Section title="Now Playing">
                        {nowPlaying.map(movie=>
                            <Poster
                                key={movie.id}
                                type={Movie_type}
                                id={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.split("-")[0]}

                            >
                            </Poster>
                            )}
                    </Section>
                )}
                {popular && popular.length > 0 &&(
                    <Section title="Popular">
                        {popular.map(movie=>
                            <Poster
                                key={movie.id}
                                type={Movie_type}
                                id={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.split("-")[0]}

                            >
                            </Poster>
                            )}
                    </Section>
                )}
                {upcoming && upcoming.length > 0 &&(
                    <Section title="UPcoming">
                        {upcoming.map(movie=>
                            <Poster
                                key={movie.id}
                                type={Movie_type}
                                id={movie.id}
                                image={movie.poster_path}
                                title={movie.title}
                                rating={movie.vote_average}
                                year={movie.release_date && movie.release_date.split("-")[0]}

                            >
                            </Poster>
                            )}
                    </Section>
                    
                )}
                {error && <Message text={error} color="red"></Message>}
                {nowPlaying && nowPlaying.length===0 &&
                <Message text="No Search Result..." color="yellow"></Message>}
                
            </Container>
            
        }
        
    </>
    )
}
export default Homepresenter;