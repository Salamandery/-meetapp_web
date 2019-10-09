import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    align-self: center;
    margin: auto 0;
    display: flex;
    width: 250px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > span {
        margin-bottom: 30px;
        align-self: center;
        color: #99003d;
        font-size: 68px;
        font-family: sans-serif;
    }
    
    a {
        text-decoration: none;
        color: #fff;

        &:hover {
            color: #666;
        }
    }
`;
export const Signing = styled.button`
    background: #99003d;
    border-radius: 5px;
    border: 0px;
    align-self: stretch;
    margin-bottom: 10px;
    padding: 10px;
    color: #fff;
    font-weight: bold;

    &:hover {
        background: #800033;
        color: #fff;
    }
`;