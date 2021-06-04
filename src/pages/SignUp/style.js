import styled from 'styled-components';

export const SignUpForm = styled.form`
border: 2px solid black;
`;

export const InputWrapper = styled.div`
border: 1px solid black;
display: flex;
align-items: center;
label {
  display: inline-block;
  width: 200px;
  height: 35px;
  padding: 10px 10px;
  background-color: grey;
  margin-right: 10px;
}
input {
  width: 200px;
  height: 30px;
  margin-right: 5px;
}
select {
  margin : 0 5px;
}
`;