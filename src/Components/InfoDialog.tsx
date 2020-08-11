import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import SupportedRole from './SupportedRole';

const InfoDialog = () => {
    const [open, setOpen] = useState(false);
    const supportedRoles: Array<string> = ["mafia", "citizen", "healer", "detective", "hunter"];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="text" color="primary" onClick={handleClickOpen}>
                <InfoIcon className="info-icon" />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Supported roles"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {supportedRoles.map(sr => <SupportedRole role={sr} />)}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default InfoDialog
