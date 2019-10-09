import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
    color: #fff;
    padding: 5px 15px;
    background: #000;
`;
export const User = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
    align-items: center;
`;
export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 10px;
`;
export const Username = styled.p`
    color: #fff;
    font-weight: bold;
`;
export const ButtonPerfil = styled.button`
    color: #999;
    text-decoration: none;
    background: transparent;
    border: 0;
    
    &:hover {
        color: #666;
        cursor: pointer;
    }
`;
export const Logo = styled.button`
    background: transparent;
    border: 0;
    text-decoration: none;
    align-self: center;
    color: #99003d;
    font-size: 42px;
    font-family: sans-serif;
`;
export const Sair = styled.button`
    background: #99003d;
    height: 36px;
    border-radius: 5px;
    border: 0px;
    margin: 10px;
    padding: 5px 20px;
    color: #fff;
    font-weight: bold;

    &:hover {
        background: #800033;
        color: #fff;
    }
`;