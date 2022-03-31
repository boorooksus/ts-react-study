### Try.tsx 파일 생성 후 코드 작성

props 받는 방법

```javascript
const Try: React.FunctionComponent<TryProps> = ({ tryInfo }) => {
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
};
```

<br>

### type.ts 파일 생성 후 인터페이스 같은 타입들은 이 파일로 이동시키기

<br>

### 프로젝트 실행 후 자동 업데이트 패키지 설치

`npm i -D webpack-dev-server`  
package.json 파일에서 스크립트 추가

```json
"scripts": {
    "dev": "webpack serve --env development",
  },
```

<br>

### webpack.config.ts 파일 설정

```json
output: {
    publicPath: "/dist/",
  },
```

위 경로 설정 넣기

dist 폴더 제거

### 프로젝트 실행

`npm run dev`
