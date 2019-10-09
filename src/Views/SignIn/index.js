import React, {
    useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    Login
} from './style';
import {
    Input
} from '../../Style';
import { signInRequest } from '../../Services/store/auth/action';
const SignIn = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);
    const [email, setEmail] = useState(''); 
    const [password, setPass] = useState(''); 

    async function handlerSignIn() {
        try {
            dispatch(signInRequest(email, password));
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Container> 
            <span>M</span>
            <Input placeholder="Login" 
                   value={email} 
                   onChange={e=>setEmail(e.target.value)}
            />
            <Input placeholder="Senha"
                   value={password} 
                   onChange={e=>setPass(e.target.value)}
             />
            <Login onClick={handlerSignIn}>{ loading ? 'Carregando..' : 'Entrar' }</Login>
            <a href="/SignUp">Criar conta grátis</a>
        </Container>
    );
}

export default SignIn;