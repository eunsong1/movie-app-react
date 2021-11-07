import { Link } from "react-router-dom";
import styled from "styled-components";
import { Movie_type, TV_show } from "./Type";

const Container = styled.div`
    font-size : 15px;

`;

const Image = styled.div`
    background-image : url(${props => props.bgUrl});
    background-size : cover;
    height : 150px;
    border-radius :5px;
    background-position : center center;
    transition : opacity 0.1s linear;
`;
const Rating = styled.span`
    opacity : 0;
    position : absolute;
    bottom : 5px;
    right : 5px;
    transition : opacity 0.1s linear;
`;
const Title = styled.span`
    display : block;
    margin-bottom : 3px;
`;
const Year = styled.span`
    font-size: 15px;
    color : yellow;

`;
const ImageContainer = styled.div`
    &:hover{
        ${Image}{
            opacity : 0.5;

        }
        ${Rating}{
            opacity : 1;
        }
    }
    position : relative;
    marin-bottom : 10px;
`;
const Poster =({id,title, image, rating, year, type})=>{
    return(
        <Link to = {`${type.prefixUrl}/${id}`}>
        <Container>
            <ImageContainer>
                <Image 
                bgUrl={image ? `https://image.tmdb.org/t/p/w500${image}` : require("../Assets/not img.png").default}
                ></Image>
                <Rating>
                    <span>⭐</span>
                    {rating}/10.0
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
        </Link>
    )
}

export default Poster;

