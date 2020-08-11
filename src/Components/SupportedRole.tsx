import React from 'react'

interface Props {
    role: string
}

const SupportedRole: React.FC<Props> = ({ role }) => {
    let bgImage: string = "";
    try {
        bgImage = require(`../Images/${role.toLowerCase()}.png`);
    }
    catch (err) {
        //default case: notfound
    }
    return (
        <div className="supported-role" style={{ backgroundImage: bgImage ? `url("${bgImage}")` : "" }}>
            <h3>{role}</h3>
        </div>
    )
}

export default SupportedRole
