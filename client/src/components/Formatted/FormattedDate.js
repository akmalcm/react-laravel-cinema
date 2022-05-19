import React from "react";

const FormattedDate = (props) => {
    const format = (date) => {
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        let parsed_date = new Date(Date.parse(date));
        let formatted_date = parsed_date.getDate() +
            '-' + months[parsed_date.getMonth()] +
            '-' + parsed_date.getFullYear();

        return formatted_date;
    }

    return (
        <span>{format(props.value)}</span>
    );
}

export default FormattedDate;