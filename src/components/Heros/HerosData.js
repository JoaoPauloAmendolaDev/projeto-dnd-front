import { useEffect, useState } from "react"
import styled from "styled-components"
import useToken from "../../hooks/api/useToken"

export default function HerosData({ data }) {
    const token = useToken()

    return (
        <StyledHeroBox>
            <Name>${data.map((item) => item.name)}</Name>
            <Race>${data.map((item) => item.race)}</Race>
            <Modifier>${data.map((item) => item.modifier)}</Modifier>
        </StyledHeroBox>
    )
}

const StyledHeroBox = styled.div`
    width: 50px;
    height: 25px;

    background-color: #fff;
`

const Name = styled.p`
    font-style: bold;

    font-size: 14px;
`

const Race = styled.p`
    font-size: 9px;
`

const Modifier = styled.p`
    font-style: bold;
    
    font-size: 20px;
`