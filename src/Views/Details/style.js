import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    margin: 50px auto;
    display: flex;
    width: 900px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const SubHeader = styled.div`
    padding: 0 5px;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    > span {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;
export const ButtonGroup = styled.div`
    padding: 0 0px;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    > span {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 10px;
    }
`;
export const EditMeet = styled.button`
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    background: #00ace6;
    border-radius: 5px;
    border: 0px;
    align-self: flex-end;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;

    > span {
        margin-left: 10px;
        font-size: 14px;
    }

    &:hover {
        background: #006bb3;
        color: #fff;
    }
`;
export const CanMeet = styled.button`
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    background: red;
    border-radius: 5px;
    border: 0px;
    align-self: flex-end;
    margin-bottom: 10px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;

    > span {
        margin-left: 10px;
        font-size: 14px;
    }

    &:hover {
        background: #990000;
        color: #fff;
    }
`;
export const Image = styled.img`
    height: 450px;
    align-self: stretch;
`;
export const Description = styled.span`
    color: #fff;
    margin-top: 25px;
    font-size: 12px;
    font-weight: bold;
`;
export const Meetup = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px;
    align-self: stretch;
    border: 0px;
    color: #fff;
`;
export const LabelInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
`;
export const Labels = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: #999;
    
    > span {
        color: #999;
        font-size: 12px;
        margin-right: 15px; 
        margin-left: 10px;
    }
`;
export const GroupMeetup = styled.div`
    margin-top: 20px;
    align-self: stretch;
    width: 100%;
    display: flex;
    padding-top: 10px;
    flex-direction: column;
`;