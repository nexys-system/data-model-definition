import React from "../_snowpack/pkg/react.js";
import {isJson} from "../utils.js";
export default (props) => {
  const {validationFunc, valueDefault = ""} = props;
  const [content, setContent] = React.useState(valueDefault);
  const [errors, setErrors] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleSubmit = () => {
    if (!isJson(content)) {
      const errors3 = ["the string you entered is not a JSON string, try again"];
      setErrors(errors3);
      setMessage(null);
      return;
    }
    const validation = validationFunc(content);
    console.log(validation);
    if (validation.errors) {
      setErrors(validation.errors);
      setMessage(null);
      return;
    }
    const errors2 = null;
    const message2 = "Congratulations, this is a valid file";
    setErrors(errors2);
    setMessage(message2);
  };
  const handleChange = (a) => {
    const content2 = a.target.value;
    setContent(content2);
  };
  const renderError = () => {
    if (!errors) {
      return null;
    }
    return /* @__PURE__ */ React.createElement("ul", {
      className: "list-group"
    }, errors.map((error, i) => {
      return /* @__PURE__ */ React.createElement("li", {
        className: "list-group-item list-group-item-danger",
        key: i
      }, error);
    }));
  };
  const renderSuccess = () => {
    if (!message) {
      return null;
    }
    return /* @__PURE__ */ React.createElement("p", {
      className: "alert alert-success"
    }, message);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, renderError(), renderSuccess(), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-md-12"
  }, /* @__PURE__ */ React.createElement("textarea", {
    className: "form-control",
    style: {minWidth: "100%", height: "400px"},
    placeholder: "insert your json here",
    value: content,
    onChange: handleChange
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "submit",
    onClick: handleSubmit
  }, "Validate"))));
};
