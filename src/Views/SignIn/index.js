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

const SignIn = ({history}) => {
    const [email, setEmail] = useState(''); 
    const [password, setPass] = useState(''); 

    async function handlerSignIn() {
        try {
            const res = await api.post('/sessions', {
                email,
                password
            });
            if (res.status === 200) {
                history.push('/Dashboard');
            }
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
            <Login onClick={handlerSignIn}>Entrar</Login>
            <a href="/SignUp">Criar conta grátis</a>
        </Container>
    );
}

export default SignIn;