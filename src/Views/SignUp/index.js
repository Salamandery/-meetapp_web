import React, {
    useState
} from 'react';
import api from '../../Services/api';
import {
    Container,
    Login
} from './style';
import {
    Input
} from '../../Style';

const SignUp = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPass] = useState(''); 

    async function handlerSignIn() {
        try {
            const res = await api.post('/sessions', {
                email,
                password
            });
            if (res.status === 200) {
                history.push('/SignIn');
            }
        } catch (err) {
            console.log(err)
        }

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
                   onChange={e=>setPass(e.target.value)}
                   placeholder="Sua senha secreta" />
            <Login onClick={handlerSignIn}>Entrar</Login>
            <a href="/">Já tenho uma conta.</a>
        </Container>
    );
}

export default SignUp;