import React from 'react';
import { Icon, Statistic } from 'semantic-ui-react';

function DisplayBalance({ color = 'black', title, value, size = 'tiny'}) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign:'left'}}>{title}</Statistic.Label>
            <Statistic.Value><Icon name='rupee' /> {value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance
