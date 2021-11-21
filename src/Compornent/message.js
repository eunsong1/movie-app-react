import React from "react";
import styled from "styled-components";
const Container = styled.div`
    width : 100vw;
    display : flex;
    justify-content : center;

`
const Text = styled.span`
    color : ${props=>props.color};
`
const Massage = ({color, text}) => {
    return(
        <Container>
            <Text color={color}>{text}</Text>
        </Container>
    )
}
export default Massage;