const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/data",
    proxy({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};

// proxy: 앱이 실행될 때 src디렉토리에서 setupProxy.js를 찾은 뒤 이 파일의 설정을 참고하여 프록시를 설정.
// 여기서는 /data 라는 경로로 요청이 들어올 경우 localhost:5000서버를 이용
