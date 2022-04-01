### 안바뀌는 값은 as const로 타입 고정

```javascript
const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px'
} as const;
```

### 오브젝트 키, 값들 가져오기

```javascript
type ImgCoords = typeof rspCoords
// '바위': '0' | '가위': '-142px' | '보': '-284px'

type ImgCoords = keyof typeof rspCoords
// '바위' | '가위' | '보'

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
// '0' | '-142px' | '-284px'
```

<br>

### key() 타입 주의점

```javascript
// key는 항상 string 리턴. generic 지원 안하므로 as로 강제 형변환
// 끝에 느낌표는 typescript가 undefined로 추론할 수 있기 때문에 안나온다고 확신주기 위해서
const computerChoice = (imgCoords: ImgCoords) => {
  return (Object.keys(rspCoords) as ["바위", "가위", "보"]).find((k) => {
    return rspCoords[k] === imgCoords;
  })!;
};
```

<br>

### 고차 함수

```javascript
 <button id="rock" className="btn" onClick={onClickBtn("바위")}>
```

onClick 함수에 인자가 들어간 경우, 호출되는 `onClickBtn` 함수는 고차함수로 만들어야 한다.

```javascript
const onClickBtn = (choice: keyof typeof rspCoords) => () => {
    //...
}
```

리액트에서 많이 쓰이는 기법
<br>
