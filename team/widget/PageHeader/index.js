import React from "react";

// OWNER : dgp_next_mall
// LAST EDIT : 07 Sep 2022

const WPageHeader = props => {

    /**
     * DEFINE PROPS
     */
    let _rightSide = props.rightSide;
    let _subtitle = props.subtitle;
    let _title = props.title;

    return (
        <div style={{ paddingBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ fontSize: 18, fontWeight: 'bold' }}>
                        {_title}
                    </div>
                    <div style={{ fontSize: 14, color: '#9C9C9C' }}>
                        {_subtitle}
                    </div>
                </div>
                <div>
                    {_rightSide}
                </div>
            </div>
            <div style={{ borderBottom: '1px solid #F5F5F5', fontSize: 7 }}>
                &nbsp;
            </div>
        </div>
    );
}

export default WPageHeader;