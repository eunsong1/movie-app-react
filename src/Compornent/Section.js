import styled from "styled-components"


const Container = styled.div`
    margin-bottom : 50px;
`;

const Title = styled.span`
    font-size : 15px;
    font-weight : 600;

`;

const Grid = styled.div`
    margin-top : 25px;
    display : grid;
    grid-template-columns : repeat(auto-fill, 160px);
    grid-gap: 20px
`;

const Section =({title,children})=>{
    return(
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    );
}

export default Section;