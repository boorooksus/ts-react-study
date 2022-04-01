import * as React from "react";
import { useState, useRef, useEffect } from "react";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
} as const;

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
} as const;

type ImgCoords = typeof rspCoords[keyof typeof rspCoords];
// key는 항상 string 리턴. generic 지원 안하므로 as로 강제 형변환
// 끝에 느낌표는 typescript가 undefined로 추론할 수 있기 때문에 안나온다고 확신주기 위해서
const computerChoice = (imgCoords: ImgCoords) => {
  return (Object.keys(rspCoords) as ["바위", "가위", "보"]).find((k) => {
    return rspCoords[k] === imgCoords;
  })!;
};

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState<ImgCoords>(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef<number>();
  const clicked = useRef<boolean>(false);

  useEffect(() => {
    // componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
    console.log("다시 실행");
    // setInterval은 node가 아닌 window 실행
    interval.current = window.setInterval(changeHand, 100);
    return () => {
      // componentWillUnmount 역할
      console.log("종료");
      clearInterval(interval.current);
    };
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };

  const onClickBtn = (choice: keyof typeof rspCoords) => () => {
    if (!clicked.current) {
      clearInterval(interval.current);
      clicked.current = true;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult("비겼습니다!");
      } else if ([-1, 2].includes(diff)) {
        setResult("이겼습니다!");
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult("졌습니다!");
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = window.setInterval(changeHand, 100);
        clicked.current = false;
      }, 1000);
    }
  };

  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("바위")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;
