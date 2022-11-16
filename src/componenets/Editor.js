import React, { useState } from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
import "./Editor.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});
const Editor = ({ item, onUpdate }) => {
  const [selectedTab, setSelectedTab] = React.useState("write");
  console.log(item);
  return (
    <div className="container">
      <ReactMde
        value={item.content}
        onChange={onUpdate}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
};

export default Editor;
