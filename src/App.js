import React, { Component } from "react";
import GoldenCard from "./components/GoldenCard";
//import Wrapper from "./components/Wrapper";
import Container from "./components/Container"
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";
import Notifications, {notify} from 'react-notify-toast';

class App extends Component {
  state = {
    friends,
    count: 0,
    topscore: 0,
  };


  handleClick = clickedID => { 
    this.shuffleCards()
    let clickedIMG = this.state.friends.find(function(clkimg){
      return clkimg.id === clickedID;
    })
    if(clickedIMG.clicked){
      notify.show("You already clicked that one! GAME OVER!", "error");
      this.resetArr()
      if(this.state.topscore < this.state.count){
        this.setState({topscore: this.state.count})
      }
      this.setState({count: 0, friends})
    }
    else{
      clickedIMG.clicked = true;
      this.setState({count: this.state.count +1 })
    }
  }

  resetArr = () => {
    this.state.friends.map(friend => { 
      friend.clicked = false; 
      return friend
    });
  }

  shuffleCards = () => {
    let friends = this.state.friends.concat();
    for (let i = friends.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [friends[i], friends[j]] = [friends[j], friends[i]];
  }
  this.setState({ friends })
}

  render() {
    return (
      <Container>
        <Notifications />
        <Navbar
        count={this.state.count}
        topscore={this.state.topscore}
         />
        <Jumbotron />
       
        {this.state.friends.map(friend => (
          <GoldenCard
            shuffleCards = {this.shuffleCards}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleClick={this.handleClick}
          />
        ))}
       
      </Container>
    );
  }
}

export default App;
