import styled from "styled-components";

const Container= styled.div`
    height :100%;
    width : 100%;
    display : flex;
    justify-content : center;
    font-size : 100px;
`

const Loader=()=>{
    return (
        <Container>
            <span>⏲</span>
        </Container>
    )
}

export default Loader;