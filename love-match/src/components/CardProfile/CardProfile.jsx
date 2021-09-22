import React from "react";
import { ButtonsContainer, InfoContainer, MainContainer } from "./styled";

export const CardProfile = (props) => {
    return (
        <MainContainer>
            <h1>Love Match</h1>
            <img src={"https://i.imgur.com/v9w65M9.jpeg"} alt={"gato"} />
            <InfoContainer>
                <p>{props.name}</p>
                <p>{props.bio}</p>
                <p>{props.age}</p>
            </InfoContainer>
            <ButtonsContainer>
                <button>Match</button>
                <button>Rejeita</button>
            </ButtonsContainer>
        </MainContainer>
    )
}