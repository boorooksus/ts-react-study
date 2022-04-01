### useMemo

useMemo를 사용해서 리렌더링 돼도 기존에 뽑힌 숫자 유지

```javascript
const lottoNumbers = useMemo(() => getWinNumbers(), []);
```

<br>

### 빈 배열 사용 주의

generic으로 타입 전달

```javascript
  const [winBalls, setWinBalls] = useState<number[]>([]);
```

  <br>

### useEffect 정리 부분 주의

```javascript
useEffect(() => {
  // ...

  // return에서 정리해줘야 이벤트가 안꼬임
  return () => {
    timeouts.current.forEach((v) => {
      clearTimeout(v);
    });
  };
}, [timeouts.current]);
```
