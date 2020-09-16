import React from "react";

function Footer(props) {
  console.log( props  + "props");
  return (
    <>
      <footer>
        <span className="item">{props.leftItems} item left</span>
        <button className="all" onClick={() => props.handleTab("ALL")}>
          All
        </button>
        <button
          className="completed"
          onClick={() => props.handleTab("COMPLETED")}
        >
          Completed
        </button>
        <button className="active" onClick={() => props.handleTab("ACTIVE")}>
          Active
        </button>
        <button className="clear" onClick={(e) => props.handleClearCompleted(e)}>
          Clear Completed
        </button>
      </footer>
    </>
  );
}

export default Footer;
