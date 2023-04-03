import { useEffect, useState } from "react"
import styled from "styled-components"
import ParticipantsBox from "../../../components/ParticipantsBox"

export default function UnloggedInitiative() {
    const [round, setRound] = useState(0)
    const [alliedData, setAlliedData] = useState([])
    const [enemyData, setEnemyData] = useState([])
    const [allCharacters, setAllCharacters] = useState([])
    const [name, setName] = useState('')
    const [modifier, setModifier] = useState(0)

    function submit(ally) {
        if (ally) {
            if (!name) {
                console.log('Bad request')
            }
        }
    }

    console.log(modifier)

    function modifyName(e) {
        setName(e.target.value)
    }

    function modifyValue(e) {
        setModifier(e.target.value)
    }

    function addCharacter(ally, characterData) {
        if (!characterData.name) return alert('é obrigatório preencher o nome')

        if (ally) {
            setAlliedData([...alliedData, characterData])
            console.log(alliedData)
        } else {
            setEnemyData([...enemyData, characterData])
        }

        setAllCharacters([...allCharacters, characterData])
    }

    console.log('aqui os heróis', alliedData)
    console.log('aqui os vilões', enemyData)
    console.log('aqui todos', allCharacters)

    return (
        <Body>
            <Header>
                <div><p>ROLADOR DE INICIATIVA</p></div>
                <div><p>BESTIÁRIO</p></div>
                <div><p>CALCULADORA DE COMBATE</p></div>
            </Header>

            {!round ?
                <NotStarted>
                    <ParticipantsConteiner>
                        {allCharacters.map((item) => (
                            <ParticipantsBox key={item.id} data={item} />
                        ))}
                    </ParticipantsConteiner>
                    <AddParticipants>
                        <FormBox>
                            <p>Name</p>
                            <input type={"text"} onChange={(e) => modifyName(e)}></input>
                            <p>Modifier</p>
                            <input type="Number" value={modifier} onChange={(e) => modifyValue(e)} />
                        </FormBox>
                        <AllyOrEnemy>
                            <ConfirmButton ally={true} onClick={() => addCharacter('true', { name, modifier })}><p>ALIADO</p></ConfirmButton>

                            <ConfirmButton ally={false} onClick={() => addCharacter(false, { name, modifier })}><p>INIMIGO</p></ConfirmButton>
                        </AllyOrEnemy></AddParticipants>
                </NotStarted> :
                <StartedRound>
                </StartedRound>}
        </Body>
    )
}

const AllyOrEnemy = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
`

const ConfirmButton = styled.div`
    width: 15vw;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${(props) => props.ally ? '#1BC118' : '#C91212'};

    :hover{
    cursor: pointer;
    }

    p{
        font-family: 'Roboto';
        color: white;
    }
`

const FormBox = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
`

const ParticipantsConteiner = styled.div`
    width: 31%;
    height: 300px;

    margin-right: 40px;

    overflow-y: auto;
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