import React, { Fragment, useState } from 'react';

export default function EggItem(props){

    const [collapsed, setCollapsed] = useState(props.collapsed)
    

    const eggRender = function(){
        if (!collapsed){
        return(
            <div>
                <p>Weight: {props.weight}g</p>
                <p>Laid on: {props.laid}</p>
                <button onClick={handleClick}>Collapse Egg</button>
            </div>
        )
        } else {
            return (
                <button onClick={handleClick}>Expand Egg</button>
            )
        }
    }

    const handleClick = function(){
        if (collapsed){
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }
    }

    return (
        <Fragment>
            {eggRender()}
        </Fragment>
    )
}