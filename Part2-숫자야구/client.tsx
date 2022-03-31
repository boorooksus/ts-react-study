// React, ReactDom은 export default 아님
// -> import react from 'react가 아니라
// 아래처럼 import 해야함
import * as React from "react";
import * as ReactDom from "react-dom";

import NumberBaseball from "./NumberBaseball";

ReactDom.render(<NumberBaseball />, document.querySelector("#root"));
