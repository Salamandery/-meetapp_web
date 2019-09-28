import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    margin: 50px auto;
    display: flex;
    width: 728px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
        text-decoration: none;
        color: #fff;

        &:hover {
            color: #666;
        }
    }
`;
export const Save = styled.button`
    background: #99003d;
    border-radius: 5px;
    border: 0px;
    align-self: flex-end;
    margin-bottom: 10px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;

    &:hover {
        background: #800033;
        color: #fff;
    }
`;
export const ChangePassword = styled.div`
    margin-top: 20px;
    align-self: stretch;
    width: 100%;
    display: flex;
    border-top: 1px solid #333;
    padding-top: 10px;
    flex-direction: column;
`;