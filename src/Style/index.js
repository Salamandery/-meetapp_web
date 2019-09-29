import styled from 'styled-components';

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px 15px;
    align-self: stretch;
    border-radius: 3px;
    border: 0px;
    background: #000;
    color: #fff;
`;
export const TextArea = styled.textarea.attrs({
    rows: 7
})`
    resize: none;
    margin-bottom: 10px;
    padding: 10px 15px;
    align-self: stretch;
    border-radius: 3px;
    border: 0px;
    background: #000;
    color: #fff;
`;
