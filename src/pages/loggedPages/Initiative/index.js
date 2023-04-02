import { useEffect, useState } from "react"
import styled from "styled-components"
import HerosData from "../../../components/Heros/HerosData"
import useToken from "../../../hooks/api/useToken"
import * as heroServices from "../../../services/herosApi"


export default function LoggedInitiative() {
    const [round, setRound] = useState(0)
    const [heroData, setHeroData] = useState([])
    const [alliedData, setAlliedData] = useState([])
    const [enemyData, setEnemyData] = useState([])
    const token = useToken()

    useEffect(() => {
        const data = async () => {
            const heroData = await heroServices.getAllHeros(token)
            setHeroData(heroData)
        }
    }, [])


    return (
        <Body>
            <Header>
                <div><p>ROLADOR DE INICIATIVA</p></div>
                <div><p>BESTIÁRIO</p></div>
                <div><p>CALCULADORA DE COMBATE</p></div>
            </Header>

            {!round ? <NotStarted>
                <ParticipantsBox></ParticipantsBox>
                <AddParticipants>
                    <FormBox>
                        <p>Name</p>
                        <Form>texto</Form>
                        <p>Class</p>
                        <Form></Form>
                        <p>Modifier</p>
                        <Form></Form>
                    </FormBox>
                    <ConfirmButton><p>ADICIONAR</p></ConfirmButton>
                </AddParticipants>
            </NotStarted> : <StartedRound></StartedRound>}


            <SideBar>
                {heroData.map((value) => {
                    <HerosData data={value} />
                })}
            </SideBar>
        </Body>
    )
}

const ConfirmButton = styled.div`
    width: 50%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: lightgreen;
`

const FormBox = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`

const ParticipantsBox = styled.div`
    width: 30%;
    height: 300px;

    background-color: #fff;

    margin-right: 40px;
`

const Form = styled.div`
    width: 70%;
    height: 15px;

    background-color: #fff;
`

const AddParticipants = styled.div`
    width: 50%;
    height: 350px;

    background-color: aquamarine;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    div{
        margin: auto auto;
    }
`

const NotStarted = styled.div`
    width: 70%;
    height: 500px;

    background-color: lightblue;

    display: flex;
    align-items: center;
    justify-content: center;
`

const StartedRound = styled.div`
    width: 70%;
    height: 500px;

    background-color: lightgreen;
`

const SideBar = styled.div`
    width: 20%;
    height: 100%;

    background-color: grey;
`

const Body = styled.div`
    background-color: #F0F0F0;

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;

    flex-direction: column;
`

const Header = styled.div`
    width: 100%;
    height: 13vh;

    background-color: blueviolet;

    display: flex;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;

        width: 300px;
        height: 50px;
        background-color: azure;

        margin: 10px 50px;

        p{
            color: white;
        }
    }

    div:nth-child(1){
        background-color: #3939B9;
    }

    div:nth-child(2){
        background-color: grey;
    }
    
    div:nth-child(3){
        background-color: #B93939;
    }
`