
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Form/button";
import Input from "../../components/Form/input";
import UserContext from "../../contexts/UserContext";
import useSignUp from "../../hooks/api/useSignUp";
import { Background, Box, SubTexts, Forms, Title, WrongPassword } from "./style"

const { useState, useContext, useEffect } = require("react");

export default function SingUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [color, setColor] = useState('#fff')
    const { loadingSignIn, signIn } = useSignUp();
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate()

    useEffect(() => {
        console.log('1')
        if (password !== confirmPassword) {
            setColor('secondary')
        } else {
            setColor('primary')
        }
    }, [confirmPassword, password])

    async function submit(event) {
        event.preventDefault();

        try {
            const userData = await signIn(email, password);
            setUserData(userData);
            toast('Login realizado com sucesso!');
            navigate('/home');
        } catch (err) {
            toast('Não foi possível fazer o login!');
        }
    }

    return (
        <Background>
            <Box>
                <Title>Battle Master</Title>
                <SubTexts>Auxiliador de criação de combate</SubTexts>
                <SubTexts>Organizador de iniciativa de combate</SubTexts>
                <Forms>
                    <Input label="E-mail" type="text" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
                    <Input label="Password" type="password" fullWidth value={password} onChange={e => setPassword(e.target.value)} />
                    <Input label="Confirm Password" type="password" fullWidth value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    {color === 'primary' ? null : <WrongPassword>as senhas não coincidem</WrongPassword>}
                    <Button type="submit" color={color} fullWidth disabled={loadingSignIn}>Entrar</Button>

                    <SubTexts>Já tem login? Clique Aqui!</SubTexts>
                    <SubTexts>Clique aqui para usar sem logar</SubTexts>
                </Forms>
            </Box>

        </Background>
    )
}
