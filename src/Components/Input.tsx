import React, { useState } from 'react'
import { Button } from "@material-ui/core"

interface Props {
    add: (participant: string) => void;
    label: string;
    labelColor: string;
}

const Input: React.FC<Props> = ({ add, label, labelColor }) => {
    const [inputValue, setInputValue] = useState("");

    const submit = (): void => {
        if (!inputValue) return alert("Input field cannot be empty.")
        add(inputValue);
        setInputValue("");
    }

    return (
        <div className="input">
            <div style={{ backgroundColor: labelColor }}>{label}</div>
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <Button variant="contained" color="primary" onClick={submit}>Add</Button>
        </div>
    )
}

export default Input
