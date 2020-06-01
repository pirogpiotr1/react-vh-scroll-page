import React from 'react';
import Header from './Header'
import Box from './Box'
import Boxes from '../json/Boxes.json'
import Footer from './Footer'
import Blog from './Blog'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  

  constructor(props) {
      super(props)
      this.myRef = React.createRef()  
      this.boxOffsets = [];
      this.currentOffset = 0;
      this.currentOffsetId = 0;
  }
  /*
  TODO  change it couse of scroll dont work on change
  */


  componentDidMount() {
  
   if(window.location.pathname === '/' ){
      window.addEventListener('wheel', this.handleWheel);

      let boxes = Array.from(document.getElementsByClassName('box'));
      this.boxOffsets =  boxes.map( item => {
        return item.offsetTop;
      });
      this.scrollToOffset(0,'auto')
    }else{

    }

  }

  handleWheel = event => {
  
   if(event.deltaY > 0){
     
    this.scrollToOffset( this.boxOffsets[this.currentOffsetId],'auto');
    if(this.currentOffsetId !== this.boxOffsets.length ){
      this.currentOffsetId ++;
    }else if(this.currentOffsetId === this.boxOffsets.length ){
      window.scrollTo(0, document.body.scrollHeight);
    }
    
   }else{
     if(this.currentOffsetId !== 0){
        this.currentOffsetId --;
        this.scrollToOffset( this.boxOffsets[this.currentOffsetId],'auto');
     }else if(this.currentOffsetId  === 0){
      this.scrollToOffset( 0,'auto');
     }
     
   }

  };
 //test
  scrollToOffset = (offset ,behavior) =>{
    window.scrollTo({
      top:offset,
      behavior: behavior
    })
  }
  render() {
 
      const boxes = Boxes.map((item,id) => {
        return <Box name={item.name} key={id} />;
      });
    

    return (
      <Router>
        <Header title='Pizza love' />
        <main>
          <Switch>
            <Route path="/" exact strict >
            {boxes}
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/configurator" exact>
            pizza creator
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    );
  }



}

export default App;
