import React from 'react';

function Box( props ){
    console.log(props);
    return (
        <div className="box">
             <h2 className="box__name">{props.name}</h2>               
        </div>
    );
}
export default Box