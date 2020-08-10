import React, { useState } from 'react'

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
            <button onClick={submit}>Add</button>
        </div>
    )
}

export default Input
