import React, { useState, useEffect } from 'react'
import { Role } from '../types'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

interface Props {
    role: Role,
    amount: number,
    updateAmount: (role: Role, amount: number) => void
}

const RoleInput: React.FC<Props> = ({ role, amount, updateAmount }) => {
    return (
        <div className="role-input">
            <h2>{role}</h2>
            <div className="amount-setter">
                <RemoveIcon onClick={() => amount !== 0 && updateAmount(role, amount - 1)} className="minus-icon" />
                <span>{amount}</span>
                <AddIcon onClick={() => updateAmount(role, amount + 1)} className="plus-icon" />
            </div>
        </div>
    )
}

export default RoleInput
