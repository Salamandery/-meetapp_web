import React, {
    useState
} from 'react';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../Services/store/auth/action';
import {
    Container,
    Signing
} from './style';
import {
    Input
} from '../../Style';

const SignUp = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPass] = useState(''); 

    async function handlerSignIn(e) {
        e.preventDefault();

        dispatch(signUpRequest(name, email, password));
    }

    return (
        <Container>
            <span>M</span>
            <Input value={name} 
                   onChange={e=>setName(e.target.value)}
                   placeholder="Nome completo" 
            />
            <Input value={email} 
                   onChange={e=>setEmail(e.target.value)}
                   placeholder="Digite seu e-mail" 
            />
            <Input value={password}
                   type="password" 
                   onChange={e=>setPass(e.target.value)}
                   placeholder="Sua senha secreta" />
            <Signing onClick={handlerSignIn}>Entrar</Signing>
            <a href="/">Já tenho uma conta.</a>
        </Container>
    );
}

export default SignUp;