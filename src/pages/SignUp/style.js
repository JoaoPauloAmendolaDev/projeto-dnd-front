import styled from "styled-components"
import dragaoBg from "../../images/dragaoBg.jpg"

export const SubTexts = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    margin-top: 3px;
    margin-bottom: 0px;
`

export const Title = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;

    margin: auto 0;

    margin-top: 10px;
    margin-bottom: 10px;
`


export const Background = styled.div`
    width: 100vw;
    height:100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${dragaoBg});
    background-repeat: no-repeat;
    background-size: cover;
`

export const WrongPassword = styled.p`
    margin: auto auto;

    color: red;
`

export const Box = styled.div`
    width: 50vw;
    height: 80vh;

    background-color: #ffffff90;

    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    position: relative;
`

export const Forms = styled.div`
    width: 25vw;
    height: 35vh;

    margin-top: 25px;
    margin-bottom: 0px;
`