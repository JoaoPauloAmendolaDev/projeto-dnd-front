
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Form/button";
import Input from "../../components/Form/input";
import UserContext from "../../contexts/UserContext";
import useSignUp from "../../hooks/api/useSignUp";
import { Background, Box, SubTexts, Forms, Title } from "./style"

const { useState, useContext } = require("react");

export default function SingIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loadingSignIn, signIn } = useSignUp();
    const { setUserData } = useContext(UserContext);

    const navigate = useNavigate()

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
                    <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>Entrar</Button>
                </Forms>
                <SubTexts onClick={() => navigate('/signUp')}>Não tem login? inscreva-se!</SubTexts>
                <SubTexts onClick={() => navigate('/main')}>Clique aqui para usar sem logar</SubTexts>
            </Box>
        </Background>
    )
}
