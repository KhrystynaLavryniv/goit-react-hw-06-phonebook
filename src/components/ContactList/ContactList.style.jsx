import styled from 'styled-components';

export const Contacts = styled.label`
  list-style: none;
  margin-bottom: 5px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const ItemBtn = styled.button`
  margin-left: 5px;
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #0066cc;
  }
`;
