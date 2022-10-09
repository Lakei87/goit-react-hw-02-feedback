import styled from '@emotion/styled';

export const Button = styled.button`
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

        &:not(:last-child){
            margin-right: 20px;
        }
    `;