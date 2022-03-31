## 반응속도 체크 게임

### 반응속도 체크 게임 코드 작성

<br>

### 빈 배열 state

- state에서 빈 배열은 never 타입이 될 수 있기 때문에 generic으로 타입 잡아주기

```javascript
 const [result, setResult] = useState<number[]>([]);
```

<br>

### useCallback

- jsx에 들어가는 onClick, onSubmit 등의 함수는 useCallback으로 감싸는게 좋음
  <br>

### useRef

- useRef: 값을 바꿔도 화면이 리렌더링 되지 않게할 때 사용. 여기서는 시간이 변경돼도 리렌더링 되지 않게 이용
  > useRef은 세 가지로 오버로딩 되어있음
  >
  > 1. generic이 undefined된 거 -> mutableRefObject: 값 변경 가능
  > 2. generic이 undefiend가 아니고 값이 있음 -> refObject: 값 변경 불가(readlonly)
  > 3. initial value가 null인 경우 -> refObject

여기서 사용하는 useRef는 값이 변경돼야 하기 때문에 mutalbeRefObject가 되도록 해줘야 하는데 초기값이 null이 들어가있음 -> generic 타입이 initialvalue 타입과 동일하도록 하면 mutable로 사용 가능

<br>

### setTimeout

- setTimeout 함수 설명 보면 nodejs.timeout으로 되어 있음 -> 여기서는 브라우저 시간으로 해야하기 때문에 윈도우에서 'number'가 되어야 함

```javascript
timeout.current = setTimeout(() => {
  setState("now");
  setMessage("지금 클릭");
  startTime.current = new Date().getTime();
}, Math.floor(Math.random() * 1000) + 2000);
```

- 방법1: 강제로 형변환

```javascript
timeout.current = setTimeout(() => {
    setState('now');
    setMessage('지금 클릭');
    startTime.current = new Date().getTime();
}, Math.floor(Math.random() * 1000) + 2000) as unknown as number;
```

- 방법2: window.setTimeout 사용

```javascript
timeout.current = window.setTimeout(() => {
  setState("now");
  setMessage("지금 클릭");
  startTime.current = new Date().getTime();
}, Math.floor(Math.random() * 1000) + 2000);
```
