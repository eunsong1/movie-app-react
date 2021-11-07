import React from "react";
import Loader from "../../Compornent/Loader";
import styled  from "styled-components";
import Poster from "../../Compornent/Poster";
import Section from "../../Compornent/Section";
import { TV_show } from "../../Compornent/Type";
const Container = styled.div`
`;

const TVshowPresenter=({TVD : {topRated, popular, airingTody}, loading, error})=>{
    return(
        <>
        {loading ?<Loader />:
            <Container>
                {topRated && topRated.length > 0 &&
                <Section tilte="Top Rated">
                    {topRated.map(tv=>
                        <Poster
                            key={tv.id}
                            type={TV_show}
                            id={tv.id}
                            title={tv.name}
                            image={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                        ></Poster>)}
                </Section>
                }
                {popular && popular.length > 0 &&
                <Section tilte="Top Rated">
                    {popular.map(tv=>
                        <Poster
                            key={tv.id}
                            type={TV_show}
                            id={tv.id}
                            title={tv.name}
                            image={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                        ></Poster>)}
                </Section>
                }
                {airingTody && airingTody.length > 0 &&
                <Section tilte="Top Rated">
                    {airingTody.map(tv=>
                        <Poster
                            key={tv.id}
                            type={TV_show}
                            id={tv.id}
                            title={tv.name}
                            image={tv.poster_path}
                            rating={tv.vote_average}
                            year={tv.first_air_date && tv.first_air_date.split("-")[0]}
                        ></Poster>)}
                </Section>
                }
            </Container>
            }
            
        </>
    )
}
export default TVshowPresenter;