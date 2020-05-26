import React from 'react';
import Header from './Header'
import Box from './Box'
import Boxes from '../json/Boxes.json'

function App() {

  const boxes = Boxes.map( item => {
    return <Box name={item.name} />;
  });

  return (
   
    <div>
      <Header  title = 'Pizza love' />
       {boxes}
    </div>
  );
}

export default App;
