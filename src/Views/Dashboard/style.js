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
    padding: 0 10px;
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
export const NewMeet = styled.button`
    text-decoration: none;
    display: flex;
    align-items: flex-start;
    background: #99003d;
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
        background: #800033;
        color: #fff;
    }
`;
export const Title = styled.span`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;
export const Meetup = styled.button`
    display: flex;
    margin-bottom: 10px;
    padding: 15px 25px;
    align-self: stretch;
    border-radius: 3px;
    border: 0px;
    background: #000;
    color: #fff;
    justify-content: space-between;

    &:hover div span {
        color: #999;
        cursor: pointer;
    }
`;
export const DataLabel = styled.div`
    display: flex;
    align-items: center;
    
    > span {
        font-size: 14px;
        color: #666;
        margin-right: 15px; 
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