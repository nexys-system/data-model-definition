import React from "react";

export default ({
  content,
  onChange,
  placeholder = "insert your json here",
}: {
  content: string;
  onChange: (x: string) => void;
  placeholder?: string;
}) => {
  const handleChange = (x: React.ChangeEvent<HTMLTextAreaElement>) => {
    const v: string = x.target.value;
    onChange(v);
  };

  return (
    <textarea
      className="form-control"
      style={{ minWidth: "100%", height: "400px" }}
      placeholder={placeholder}
      value={content}
      onChange={handleChange}
    />
  );
};
