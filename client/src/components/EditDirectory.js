import React, { useState } from 'react';
import Directory from './Directory';
import EditPopup from './EditPopup';

export default function EditDirectory( {type} ) {
    

    return (
        <div>
            <br/>
            <div> Add to {type} directory:
                <EditPopup type={type}/>
            </div>
            <Directory type={type} isAdmin={true}/>
        </div>
    );
};