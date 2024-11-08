import React, { useState } from "react";

const Container = ({ height, width, itemHeight, List }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);
  const VisibleList = List.slice(indices[0], indices[1] + 1);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + Math.floor(height / itemHeight);
    setIndices([newStartIndex, newEndIndex]);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{ width, height, backgroundColor: "gray", overflow: "auto" }}
    >
      <div style={{ height: itemHeight * List.length, position: "relative" }}>
        {VisibleList.map((item, index) => {
          return (
            <div
              style={{
                backgroundColor: "coral",
                border: "2px solid black",
                position: "absolute",
                top:(indices[0] + index) * itemHeight,
                width:'100%'
              }}
              key={index}
            >
              {"item" + item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
