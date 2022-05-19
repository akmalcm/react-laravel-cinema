import React from "react";

const FormattedMoney = (props) => {

    const format = (amount) => {
        return parseFloat(amount).toFixed(2);
    }

    return (
        <span>RM{format(props.value)}</span>
    )
}

export default FormattedMoney;