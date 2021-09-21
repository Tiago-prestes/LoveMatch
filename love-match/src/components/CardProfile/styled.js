import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    width: 275px;
    height: 525px;
    border: 4px solid red;
    border-radius: 10%;
    img {
            width: 250px;
            height: 200px;
            margin: 0 auto;
            padding-bottom: 10px;
        }
`

const InfoContainer = styled.div`
    margin: 0 auto;
    margin-bottom: 4px;
    background-color: pink;
    width: 250px;
    height: 175px;
    border-radius: 5%;
        p {
            color: black;
        }
`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 1px solid green;
`
export {
    MainContainer,
    InfoContainer,
    ButtonsContainer
}