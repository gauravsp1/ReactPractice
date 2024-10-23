import React, { useState } from "react";

function HOC(WrappedComponent) {
  function NewComp(props) {
    const [state, setState] = useState();
    const newProps = { test: "test" };
    return <WrappedComponent {...newProps} {...props} />;
  }
  return NewComp;
}

export default HOC;
