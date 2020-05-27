import React from 'react';

function Box( props ){
   
    return (
        <section>
            <div className="box">
                <h2 className="box__name">{props.name}</h2>               
            </div>
        </section>
    );
}
export default Box