import React from "react";

import * as SQLUtils from "../lib/sql";
import Textarea from "../components/textarea";
import { DdParams2 } from "../lib/type";

export default () => {
  const [input, setInput] = React.useState<string>("");
  const [out, setOut] = React.useState<DdParams2[] | undefined>(undefined);

  const handleTransform = () => {
    const out = SQLUtils.tableDefToFields(input);

    setOut(out);
  };

  return (
    <>
      <Textarea
        content={input}
        onChange={(v) => setInput(v)}
        placeholder={"enter SQL definition here"}
      />
      <button onClick={handleTransform} className="btn btn-primary">
        Transform
      </button>
      {out && (
        <>
          <button
            onClick={() => navigator.clipboard.writeText(JSON.stringify(out))}
            className={"btn btn-small btn-default"}
          >
            Copy to clipboard
          </button>
          <pre>{JSON.stringify(out, null, 2)}</pre>
        </>
      )}
    </>
  );
};
