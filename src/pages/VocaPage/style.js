import styled from 'styled-components';

export const Table = styled.table`
  margin : 10px auto 0 auto;
  width : 90%;
  border-top: 3px solid black;
  border-collapse: collapse;
  thead {
    background: rgb(240,240,240);
  }
  th, td {
    border-bottom : 2px solid rgb(240,240,240);
    padding: 10px;
    text-align: center;
  }
`;