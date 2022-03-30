### GuGuDan.tsx 내용 마저 작성

- react 모듈 import할 때, `import * as React from "react"` 로 해야하는 것 주의
- useRef: input 부분 focus 할 때 사용
- useState, useRef 등의 훅에서 타입 추론이 안되는 경우에는 Generic으로 타입 명시해줘야함(여기에서는 useRef에 타입 명시)
- form submit handler 함수의 매개변수 타입 지정

```javascript
const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {...}
```

- !(느낌표)는 타입이 확실한 경우 사용할 수 있음 -> useRef에서 generic으로 타입 전달하도록 하면 `input!.focus()'`로 쓸 수 있음.
  또는 느낌표 안쓰고 조건문으로 narrowing 해도 됨

```javascript
const inputEl = useRef<HTMLInputElement>(null);

// ...

input!.focus();
// 또는
if (input) {
    input!.focus();
}
```

<br>
### 프로젝트 실행
- 터미널에 `npx webpack` 명령어 입력해서 빌드
- index.html 실행
