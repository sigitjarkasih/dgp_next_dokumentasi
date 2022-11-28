import React from "react";
import { colorPrimary } from "../../../config/site/site-color";

const SButton = (props) => {
  // =================
  // MENDEFINISI PROPS
  // =================
  let _title = props.title;
  let _bgcolor = props.bgcolor;
  let _type = props.type;

  let _onClick = props.onClick;
  let _cursor = props.cursor;
  let _color = props.color;
  let _padding = props.padding;
  let _paddingLeft = props.paddingLeft;
  let _paddingRight = props.paddingRight;
  let _radius = props.radius;
  let _border = props.border;
  let _fontSize = props.fontSize;

  _bgcolor = _bgcolor === undefined ? colorPrimary : _bgcolor;

  return (
    <button 
      type={_type}
      onClick={_onClick}
      style={{
        fontSize: _fontSize,
        borderRadius: _radius,
        border: _border,
        color: _color,
        padding: _padding,
        paddingLeft: _paddingLeft,
        paddingRight: _paddingRight,
        cursor: _cursor,
        backgroundColor: _bgcolor,
      }}
    >
      {_title}
    </button>
  );
};

export default SButton;
