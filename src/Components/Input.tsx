import React, { useState, useRef } from 'react'
import Button from "@material-ui/core/Button"

interface Props {
    addParticipant: (participant: string) => void;
    label: string;
    labelColor: string;
}

const Input: React.FC<Props> = ({ addParticipant, label, labelColor }) => {
    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef() as React.MutableRefObject<HTMLInputElement>;

    const submitForm = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent): void => {
        event.preventDefault();
        if (!inputValue) return alert("Input field cannot be empty.")
        addParticipant(inputValue);
        setInputValue("");
        if (inputElement && inputElement.current) inputElement.current.focus();
    }

    return (
        <div className="input">
            <form onSubmit={submitForm}>
                <label style={{ backgroundColor: labelColor }}>{label}</label>
                <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} ref={inputElement} />
                <Button variant="contained" color="primary" onClick={submitForm}>Add</Button>
            </form>
        </div>
    )
}

export default Input
