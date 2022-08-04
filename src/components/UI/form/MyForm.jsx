import React from 'react';
import classes from './MyForm.module.css'

const MyForm = ({children, visible, setVisible}) => {
    const rootclasses = [classes.myForm]
    if (visible) {
        rootclasses.push(classes.active)
    }

    return (
        <div className={rootclasses.join(' ')}
        onClick={() => setVisible(false)}>
            <div className={classes.myFormContent}
            onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyForm;