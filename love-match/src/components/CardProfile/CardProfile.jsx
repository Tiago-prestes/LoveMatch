import React from "react";
import { ButtonsContainer, InfoContainer, MainContainer } from "./styled";

export const CardProfile = () => {
    return (
        <MainContainer>
            <h1>Love Match</h1>
            <img src={"https://i.imgur.com/v9w65M9.jpeg"} alt={"gato"} />
            <InfoContainer>
                <p>Nome</p>
                <p>Informações de bio</p>
                <p>Idade</p>
            </InfoContainer>
            <ButtonsContainer>
                <button>Match</button>
                <button>Rejeita</button>
            </ButtonsContainer>
        </MainContainer>
    )
}