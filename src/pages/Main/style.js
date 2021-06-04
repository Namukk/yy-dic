import styled from 'styled-components';

export const DummyAD = styled.div`
width : 90%;
background-color: gray;
font-size: 18px;
text-align: center;
border: 1px solid black;
padding: 30px;
margin: 10px auto;
`;

export const MainWrapper = styled.div`
display: flex;
align-items: center;
`;

export const MainLeft = styled.div`
width: 70vw;
margin:20px;
`;

export const HotDic = styled.div`
display: flex;
justify-content: space-around;
`;

export const HotDicContent = styled.div`
text-align: center;
.dic-cover {
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 150px;
  border: solid 5px black;
  font-size: 30px;
  font-weight: 700;
  color: purple;
}
`;

export const MonthlyBestWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: nowrap;
h3 {
  text-align: center;
}
.monthly-content{
  width: 600px;
  border: solid 1px black;
  font-size: 20px;
  line-height: 2em;
}
`;

export const MainRight = styled.div`
.dummy-login {
  width: 400px;
  height: 200px;
  background-color: rgb(200,200,200);
}
`;

export const TodayTop = styled.ol`
width: 400px;
border: 1px solid black;
line-height: 1.5em;
h3 {
  text-align: center;
}
`;