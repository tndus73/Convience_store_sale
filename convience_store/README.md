# 210624

- 기존의 git을 지우고 새로운 루트를 만들어서 git에 올렸더니 git에서 이 폴더에 접근할 수가 없다.
- .git이 있어서 그렇다고해서 지웠는데도 변화없음. 아예 이 폴더에서 변경한 사항이 루트의 변경사항에 올라가지 않음.
- git remote를 하면 정상적으로 나옴.

# 210623

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
