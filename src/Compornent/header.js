import {Link, withRouter} from "react-router-dom"
import styled from "styled-components";



const Head = styled.header`
    color :white;
    position : fixed;
    top: 0;
    left:0;
    width : 100%;
    height : 50px;
    display : flex;
    align-items:center;
    background-color : rgba(1,1,5,0.6);
    z-index : 1;
    box-shadow : 0px 1px 5px 2px raba(0,0,0, 0.8);
    `;
const List = styled.ul`
    display : flex;
`;

const Item = styled.li`
    width : 80px;
    height : 40px;
    text-align : centor;
    border-bottom : 5px solid ${props =>props.current ? "#fbc531": "transparent"};
    transition : border-bottom 0.5s ease-in-out;                                                                                                                                                                                                                                          
`;
const SLink = styled(Link)`
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Header= withRouter(({location : {pathname}})=>{
    console.log(pathname)
    return (
        <Head>
            <List>
                <Item current= {pathname==="/"}>
                    <SLink to ="/">Home</SLink>
                </Item>
                <Item current= {pathname==="/TV"}>
                    <SLink to="/TV">TvShow</SLink>
                </Item>
                <Item current= {pathname==="/search"}>
                    <SLink to="/search">Search</SLink>
                </Item>
            </List>
        </Head>
    )
})

export default Header;