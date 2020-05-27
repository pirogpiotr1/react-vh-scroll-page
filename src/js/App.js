import React from 'react';
import Header from './Header'
import Box from './Box'
import Boxes from '../json/Boxes.json'
import Footer from './Footer'



class App extends React.Component {

  

  constructor(props) {
      super(props)
      this.myRef = React.createRef()  
      this.boxOffsets = [];
      this.currentOffset = 0;
      this.currentOffsetId = 0;
  }
  componentDidMount() {
   
    window.addEventListener('wheel', this.handleWheel);

    let boxes = Array.from(document.getElementsByClassName('box'));
    this.boxOffsets =  boxes.map( item => {
      return item.offsetTop;
    });
    this.scrollToOffset(0,'auto')

  }

  handleWheel = event => {
    console.log(event.deltaY);
    console.log(this.currentOffsetId);
   if(event.deltaY > 0){
     
    this.scrollToOffset( this.boxOffsets[this.currentOffsetId],'auto');
    if(this.currentOffsetId != this.boxOffsets.length ){
      this.currentOffsetId ++;
    }else if(this.currentOffsetId == this.boxOffsets.length ){
      window.scrollTo(0, document.body.scrollHeight);
    }
    
   }else{
     if(this.currentOffsetId != 0){
        this.currentOffsetId --;
        this.scrollToOffset( this.boxOffsets[this.currentOffsetId],'auto');
     }else if(this.currentOffsetId  == 0){
      this.scrollToOffset( 0,'auto');
     }
     
   }

  };

  scrollToOffset = (offset ,behavior) =>{
    window.scrollTo({
      top:offset,
      behavior: behavior
    })
  }
  render() {

    const boxes = Boxes.map(item => {
      return <Box name={item.name} />;
    });

    return (

      <div ref={this.myRef}>
        <Header title='Pizza love' />
        <main>
          {boxes}
        </main>
        <Footer />
      </div>
    );
  }



}

export default App;
