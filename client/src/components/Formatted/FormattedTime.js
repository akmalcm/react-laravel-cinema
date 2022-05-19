import React, { useState } from "react";

const FormattedTime = (props) => {

    const format = (date) => {
        let formatted_time = date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        });

        return formatted_time
    }

    return (
        <span>{format(props.value)}</span>
    );

}

export default FormattedTime;