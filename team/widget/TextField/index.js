import React from "react";
import WFormField from "../FormField";

// OWNER : dgp_next_mall
// LAST EDIT : 08 Sep 2022

const WTextField = props => {

    /**
     * DEFINE PROPS
     */
    let _label = props.label;
    let _border = props.border;
    let _borderRadius = props.borderRadius;
    let _defaultValue = props.defaultValue;
    let _disabled = props.disabled;
    let _onChange = props.onChange;
    let _placeholder = props.placeholder;
    let _type = props.type;
    let _value = props.value;

    _type = _type === undefined ? "text" : _type;
    _border = _border === undefined ? "1px solid #DBDBDB" : _border;
    _borderRadius = _borderRadius === undefined ? 10 : _borderRadius;

    return (
        <WFormField
            label={_label}
            children={
                <input
                    type={_type}
                    style={
                        {
                            width: '100%',
                            padding: 12,
                            paddingLeft: 15,
                            paddingRight: 15,
                            fontSize: 16,
                            letterSpacing: 0.5,
                            border: _border,
                            borderRadius: _borderRadius,
                            backgroundColor: '#FAFAFA'
                        }
                    }
                    autoComplete="off"
                    value={_value}
                    defaultValue={_defaultValue}
                    onChange={_onChange}
                    placeholder={_placeholder}
                    disabled={_disabled}
                />
            }
        />
    );
}

export default WTextField;