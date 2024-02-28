import styled from "styled-components";


export const PaginatorContainer = styled.div`
    background-color: #ffffff;
    padding: 15px;
    margin: 20px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
`

export const StyledSelect = styled.select`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    color: #333;
    outline: none;

    &:hover {
        border-color: #666;
    }

    &:focus {
        border-color: #4a90e2;
    }
`;

export const StyledOption = styled.option`
  margin: 5px;
`;