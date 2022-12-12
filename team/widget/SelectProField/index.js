import React from "react";
import WFormField from "../FormField";
import Select from "react-select"

// OWNER : dgp_next_mall
// LAST EDIT : 10 Sep 2022

const WSelectProField = props => {

    /**
     * DEFINE PROPS
     */
    let _label = props.label;
    let _menuPortalTarget = props.menuPortalTarget;
    let _onChange = props.onChange;
    let _options = props.options;
    let _placeholder = props.placeholder;
    let _value = props.value;


    return (
        <WFormField
            label={_label}
            children={
                <Select
                    styles={SelectProField}
                    placeholder={_placeholder}
                    options={_options}
                    onChange={_onChange}
                    value={_value}
                    menuPortalTarget={_menuPortalTarget}
                />
            }
        />
    );
}

export default WSelectProField;

const SelectProField = {
    control: (base) => ({
        ...base,
        minHeight: 32,
        padding: 8,
    }),
    dropdownIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
    }),
    valueContainer: (base) => ({
        ...base,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 5,
    }),
    singleValue: (base) => ({
        ...base,
        fontSize: "11pt",
        letterSpacing: "0.5pt",
    }),
    placeholder: (base) => {
        return {
            ...base,
            fontSize: "11pt",
            letterSpacing: "0.5pt",
        };
    },
};