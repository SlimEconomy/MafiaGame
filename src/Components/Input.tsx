import React, { useState } from 'react'
import Button from "@material-ui/core/Button"

interface Props {
    add: (participant: string) => void;
    label: string;
    labelColor: string;
}

const Input: React.FC<Props> = ({ add, label, labelColor }) => {
    const [inputValue, setInputValue] = useState("");

    const submitForm = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent): void => {
        event.preventDefault();
        if (!inputValue) return alert("Input field cannot be empty.")
        add(inputValue);
        setInputValue("");
    }

    return (
        <div className="input">
            <form onSubmit={submitForm}>
                <label style={{ backgroundColor: labelColor }}>{label}</label>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <Button variant="contained" color="primary" onClick={submitForm}>Add</Button>
            </form>
        </div>
    )
}

export default Input
