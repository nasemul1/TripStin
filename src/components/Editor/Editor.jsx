import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quillStyles.css";

const Editor = ({ value, setValue }) => {
  const handleChange = (content) => {
    setValue(content);
  };

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      theme="snow"
      placeholder="Write your blog content here..."
      className="bg-sky-100"
    />
  );
};

export default Editor;
