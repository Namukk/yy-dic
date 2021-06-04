import React from 'react';
import { MainWrapper, MainLeft, HotDic, HotDicContent, DummyAD, MonthlyBestWrapper, MainRight, TodayTop } from './style'
import { dummyHotDic, dummyMonthlyBestDic, dummyMonthlyBestComunity, dummyTodayBest} from './dummy'





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