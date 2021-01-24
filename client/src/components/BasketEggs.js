import React from 'react';
import EggItem from './EggItem';

export default function BasketEggs(props){
    
    const eggNodes = props.eggs.map(egg => {
        return <EggItem key={egg._id} weight={egg.weight} laid={egg.laid} collapsed={true}/>
    })

    return(
        <div>
            {eggNodes}
        </div>
    )
}