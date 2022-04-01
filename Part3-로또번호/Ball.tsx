import React, { memo } from "react";

const Ball = memo(({ number }: { number: number }) => {
  let background;
  if (number <= 10) {
    background = "red";
  } else if (number <= 20) {
    background = "orange";
  } else if (number <= 30) {
    background = "yellow";
  } else if (number <= 40) {
    background = "blue";
  } else {
    background = "green";
  }

  let fontStyle = "italic";

  return (
    <div className="ball" style={{ background, fontStyle }}>
      {number}
    </div>
  );
});

export default React.memo(Ball);
