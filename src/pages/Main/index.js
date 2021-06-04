import React from 'react';
import styled from 'styled-components';
import { dummyHotDic, dummyMonthlyBestDic, dummyMonthlyBestComunity, dummyTodayBest} from './dummy'


const DummyAD = styled.div`
  width : 90%;
  background-color: gray;
  font-size: 18px;
  text-align: center;
  border: 1px solid black;
  padding: 30px;
  margin: 10px auto;
`;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MainLeft = styled.div`
  width: 70vw;
  margin:20px;
`;

const HotDic = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HotDicContent = styled.div`
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

const MonthlyBestWrapper = styled.div`
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

const MainRight = styled.div`
  .dummy-login {
    width: 400px;
    height: 200px;
    background-color: rgb(200,200,200);
  }
`;

const TodayTop = styled.ol`
  width: 400px;
  border: 1px solid black;
  line-height: 1.5em;
  h3 {
    text-align: center;
  }
`;


const Main = () => {
  return (
    <div>
      <MainWrapper>
        <MainLeft>
          <h2>HOT DIC</h2>
          <hr />
          <HotDic>
            {dummyHotDic.map((v) => (
              <HotDicContent key={v.id}>
                <div className='dic-cover'>{v.name[0]}</div>
                <div className='dic-name'>{v.name}</div>
              </HotDicContent>
            ))}
          </HotDic>
          <DummyAD>광고에요 광고!! 누르지 마세요!</DummyAD>
          <h2>Monthly Best Contents</h2>
          <hr />
          <MonthlyBestWrapper>
            <div className="monthly-content">
              <h3>사전</h3>
              <ol>
                {dummyMonthlyBestDic.map((v) => (
                  <li key={v.id}>{v.name}</li>
                ))}
              </ol>
            </div>
            <div className="monthly-content">
              <h3>커뮤니티 게시글</h3>
              <ol>
                {dummyMonthlyBestComunity.map((v) => (
                  <li key={v.id}>{v.title}</li>
                ))}
              </ol>
            </div>
          </MonthlyBestWrapper>
        </MainLeft>

        <MainRight>
          <div className="dummy-login">로그인 부분</div>
          <TodayTop>
            <h3>오늘의 인기글</h3>
            {dummyTodayBest.map((v) => (
              <li key={v.id}>{v.title}</li>
            ))}
          </TodayTop>
        </MainRight>
      </MainWrapper>
    </div>
  );
};

export default Main;