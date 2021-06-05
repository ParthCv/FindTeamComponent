import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
    root: {
        width: '50%',
        fontFamily: 'sans-serif',
        padding: '20px 40px',
        width: '50%'
    },
    btn: {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 0,
        transform: 'skewX(-12deg)',
        marginTop: '10%',
        marginLeft: '30%'
    },
    label: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: '1.2rem'
    },
    group: {
        marginBottom: '20px',
        width: '50%'
    },
    txtfield: {
        fontSize: '1.2rem',
        transform: 'skewX(-12deg)',
        border: '1.25px solid black',
        position: 'absolute',
        left: '250px',
        width: '30%'
    }
}));

export default function GameForm() {

    const [name, setName] = useState('');
    const [gameID, setGameID] = useState('');
    const [open, setIsOpen] = useState(false);
    const formClass = useStyles();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name && gameID) {
            console.log('name => ' + name + ' gameID => ' + gameID);
            setName('');
            setGameID('');
            setIsOpen(true)
        }
    }

    return (
        <>
            <Collapse in={open} style={{ width: '50%' }}>
                <Alert
                    action={
                        <IconButton
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    Submitted successfully!
                </Alert>
            </Collapse>
            <form onSubmit={handleSubmit} className={formClass.root}>
                <div className={formClass.group}>
                    <label className={formClass.label} htmlFor='ign'>In Game Name</label>
                    <input
                        type="text"
                        id='ign'
                        name='ign'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter IGN"
                        className={formClass.txtfield}
                    />
                </div>
                <div className={formClass.group}>
                    <label className={formClass.label} htmlFor='gmid'>Game ID</label>
                    <input
                        type="text"
                        id='gmid'
                        name='gmid'
                        value={gameID}
                        onChange={(e) => setGameID(e.target.value)}
                        placeholder="Enter Game ID"
                        className={formClass.txtfield}
                    />
                </div>
                <Button variant="contained" type="submit" className={formClass.btn}>
                    <span style={{ transform: 'skewX(12deg)' }}>PAY & REGISTER</span>
                </Button>

            </form>
        </>
    )
}