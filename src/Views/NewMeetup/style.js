import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    margin: 50px auto;
    display: flex;
    width: 900px;
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
    display: flex;
    font-size: 17px;
    background: #99003d;
    border-radius: 5px;
    border: 0px;
    align-self: flex-end;
    margin-bottom: 10px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;

    > span {
        margin-left: 10px;
        font-size: 14px;
    }
    &:hover {
        background: #800033;
        color: #fff;
    }
`;
export const Image = styled.div`
    color: #666;
    background: #000;
    font-size: 64px;
    margin-bottom: 20px;
    align-self: stretch;
    height: 300px;
    display: flex;
    padding-top: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
        font-size: 65px;
        color: #999;
        cursor: pointer;

        > span {
            font-size: 21px;
        }
    }

    > span {
        margin-top: 15px;
        font-size: 20px;
    }
`;