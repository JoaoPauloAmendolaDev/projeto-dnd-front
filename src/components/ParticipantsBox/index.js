import styled from "styled-components"

export default function ParticipantsBox({ data }) {
    const { name, modifier } = data

    return (
        <Container>
            <Name>{name}</Name>
            <Modifier>{modifier}</Modifier>
        </Container>
    )
}

const Modifier = styled.div`
    width: 50%;
    height: 50%;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    height: 30%;
    width: 99%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: lightgray;

    border-color: black;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;

    margin-bottom: 10px;
`

const Name = styled.p`
    font-size: 20px;
    height: fit-content;
    margin: 0 0;
`