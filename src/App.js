import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {


  state = {
    yes1 : 0,
    no1 : 0,
    yes2 : 0,yes3:0,yes4:0,no2:0,no3:0,no4:0,tot:0

  }

  inyes1 = ()=>
  {
    if(this.state.yes1==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.no1==1)  
      {
      this.setState(
        {
          yes1: this.state.yes1 + 1,
          no1: this.state.no1 - 1,
        }
      )
      }
      else
      {
        this.setState(
          {
            yes1: this.state.yes1 + 1,
          }
        )
      }
    }
}

  inno1 = ()=>
  {
    if(this.state.no1==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.yes1==1)
      {
        this.setState(
          {
            no1:this.state.no1 + 1,
            yes1:this.state.yes1-1
          }
        )
      }
      else
      {
      this.setState(
        {
          no1: this.state.no1 + 1,
        }
      )
    }
    }
  }
  
  inyes2 = ()=>
  {
    if(this.state.yes2==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.no2==1)  
      {
      this.setState(
        {
          yes2: this.state.yes2 + 1,
          no2: this.state.no2 - 1,
        }
      )
      }
      else
      {
        this.setState(
          {
            yes2: this.state.yes2 + 1,
          }
        )
      }
    }
  }

  inno2=()=>
  {
    if(this.state.no2==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.yes2==1)
      {
        this.setState(
          {
            no2:this.state.no2 + 1,
            yes2:this.state.yes2-1
          }
        )
      }
      else
      {
      this.setState(
        {
          no2: this.state.no2 + 1,
        }
      )
    }
    }
  }

  inyes3 = ()=>
  {
    if(this.state.yes3==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.no3==1)  
      {
      this.setState(
        {
          yes3: this.state.yes3 + 1,
          no3: this.state.no3 - 1,
        }
      )
      }
      else
      {
        this.setState(
          {
            yes3: this.state.yes3 + 1,
          }
        )
      }
    }
  }

  inno3 = ()=>
  {
    if(this.state.no3==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.yes3==1)
      {
        this.setState(
          {
            no3:this.state.no3 + 1,
            yes3:this.state.yes3-1
          }
        )
      }
      else
      {
      this.setState(
        {
          no3: this.state.no3 + 1,
        }
      )
    }
    }
      
  }

  inyes4 = ()=>
  {
    if(this.state.yes4==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.no4==1)  
      {
      this.setState(
        {
          yes4: this.state.yes4 + 1,
          no4: this.state.no4 - 1,
        }
      )
      }
      else
      {
        this.setState(
          {
            yes4: this.state.yes4 + 1,
          }
        )
      }
    }
  }

  inno4 = ()=>
  {
    if(this.state.no4==1)
    {
      alert("You can vote only once..")
    }
    else
    {
      if(this.state.yes4==1)
      {
        this.setState(
          {
            no4:this.state.no4 + 1,
            yes4:this.state.yes4-1
          }
        )
      }
      else
      {
      this.setState(
        {
          no4: this.state.no4 + 1,
        }
      )
    }
  }
  }

  
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" >Space X</h1>
        </header>
        <img class="pic" src={ require('/Users/venkat/Desktop/finalproject/poll/src/mars.jpg') } />

        <h1 class="heading"> Poll Station </h1>

        <div className="qtns">

            1. Can Elon Musk make us Interplanetary Species? <br></br>
            <div class="bt">
            <button onClick={this.inyes1} > Yes </button>
            <button onClick={this.inno1}> No </button> 
            <p> Yes : {this.state.yes1}  No : {this.state.no1} </p> 
            </div>

            <br /> <br /><br /><br />2. Is Elon Musk the next Steve Jobs?<br></br>
            <div class="bt">
            <button onClick={this.inyes2} > Yes </button>
            <button onClick={this.inno2}> No </button>
            <p> Yes : {this.state.yes2}  No : {this.state.no2} </p> 
            </div>
            <br /> <br /><br /><br />3. Will SpaceX bankrupt before 2k30?<br></br>
            <div class="bt">
            <button onClick={this.inyes3} > Yes </button>
            <button onClick={this.inno3}> No </button>
            <p> Yes : {this.state.yes3}  No : {this.state.no3} </p> 
            </div>
            <br /> <br /><br /><br />4. Would you like to attend Summer School 2K19?<br></br>
            <div class="bt">
            <button onClick={this.inyes4} > Yes </button>
            <button onClick={this.inno4} > No </button>
            <p> Yes : {this.state.yes4}  No : {this.state.no4} </p> 
            </div><br/><br/>

            <h1 class="heading"> No of Responses : {this.state.yes1+this.state.no1+this.state.yes2+this.state.no2+this.state.no3+this.state.yes3+this.state.yes4+this.state.no4}</h1>
          
          
        
        </div>
      </div>
    );
  }
}

export default App;
