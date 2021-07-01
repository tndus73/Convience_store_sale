# 210701

- pagination을 query string이 아닌 frontend에서 결정
- pagination이 product위에 있는 문제점 발견.
  ![image](https://user-images.githubusercontent.com/57670160/124065007-dc2c1180-da70-11eb-9b2f-c2b7727630ab.png)
- pagination이 product위에 있는 문제점 해결 - grid-template-rows의 repeat를 3으로 설정
  ![image](https://user-images.githubusercontent.com/57670160/124066932-780b4c80-da74-11eb-8cfb-bbbc7a794097.png)
- 해야할 일: puppeteer로 Pagination들 스크래핑하기

# 210629

- pagination Component만들기
- pagination Component 생각해서 백엔드와 연동
- Pagination: frontend에서 현재의 위치(offset)와 보여줄 컨텐츠 수(limit)를 백엔드에 전달.
- 백엔드에서는 이에 해당하는 데이터를 끊어 보내줌.

# 210625

- CORS문제가 생김.
  ![image](https://user-images.githubusercontent.com/57670160/123389341-bf0cc400-d5d4-11eb-87d9-9def77daec58.png)
- npm i cors로 해결
  ![image](https://user-images.githubusercontent.com/57670160/123405170-84ab2300-d5e4-11eb-88ea-2adf9c32811d.png)
- 해야할 일: 리팩토링(지금 너무 지저분하고 자세하지않음.)

# 210624

- 기존의 git을 지우고 새로운 루트를 만들어서 git에 올렸더니 git에서 이 폴더에 접근할 수가 없다.
- .git이 있어서 그렇다고해서 지웠는데도 변화없음. 아예 이 폴더에서 변경한 사항이 루트의 변경사항에 올라가지 않음.
- git remote를 하면 정상적으로 나옴.
- 5개의 편의점의 할인 상품 첫페이지만 스크래핑 성공.
- 근데 시간이 너무 오래 걸림.

# 210623

- puppeteer를 리액트에서 사용하는 방법을 몰라서 익스프레스에서 하기로 함.
- CORS(Cross-Origin Resource Sharing): 클라이언트와 서버의 포트가 다른 상태에서 클라이언트 측에서 서버 측으로 무언가를 요청했을 때 보안상의 이유로 요청을 차단하는 문제
- react와 express를 연동해야됨.
- client의 fetch 폴더 지움.

# 210622

- puppeteer를 react에 사용했는데 에러발생
- express 사용해야 될 거 같음.

# 210621

- axios와 cheerio를 이용해 크롤링 시도 중 원하는 값이 안나옴.
  --> 선택자 문제같은데 내 생각에는 맞게 쓴거 같은데...
  --> console.log($.html('.prodListWrap')));을 해본 결과 아무것도 출력되지 않았음.
  --> 동적 페이지라서 cheerio로는 안되는 거 같음.
  --> puppeteer를 사용해야 할 것 같음.
