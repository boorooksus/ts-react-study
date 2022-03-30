// React, ReactDom은 export default 아님
// -> import react from 'react가 아니라
// 아래처럼 import 해야함
import * as React from "react";
import * as ReactDom from "react-dom";

import GuGuDan from "./구구단/GuGuDan";

ReactDom.render(<GuGuDan />, document.querySelector("#root"));
