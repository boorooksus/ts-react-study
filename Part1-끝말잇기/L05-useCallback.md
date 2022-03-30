## 끝말잇기 제작

### 기존 세팅 그대로 가져오고 일부 수정

- index.html에서 title 변경. 구구단 -> 끝말잇기
- client.tsx에서 'GuGuDan' 부분을 'WordRelay'로 변경
- webpack.config.js의 확장자를 ts로 바꾸고 코드 추가

```javascript
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}
```

Configuration 부분도 변경

```javascript
const config: Configuration = {
  name: "word-relay-dev",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: { plugins: ["react-refresh/babel"] },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new ReactRefreshPlugin(), new ForkTsCheckerWebpackPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
```

- 새로 추가한 5개 확장자 설치  
   `npm i -D @pmmmwh/react-refresh-webpack-plugin fork-ts-checker-webpack-plugin babel-loader react-refresh @babel/core`  
  <br>

### WordRelay.tsx 파일 생성 후 작성

- jsx에 함수를 넣을 때는 useCallback으로 감싸야 함
- useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용. state가 변경되어 리렌더링 되어도 함수가 재생성 되지 않게함
- useCallback 쓸 때는 타입 명시 해줘야 함 -> 길이 길어짐 -> 'onchange' 함수로 만들어서 따로 빼주는게 좋음
- useCallback 함수 내에서 사용하는 state들은 마지막 '[]' 안에 명시 해야함. 여기서는 'word', 'value'. 이렇게 해야 이 값이 바뀔 땐 렌더링 다시됨.
- (이번 파트는 useCallback 설명하기 위한 것)
  <br>

### 프로젝트 실행

- 터미널에 `npx webpack` 명령어 입력해서 빌드
- index.html 실행
