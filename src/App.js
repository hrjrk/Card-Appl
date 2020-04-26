import React from 'react';
import './App.css';
import './css.css';
import CardList from './CardList';
import Form from './Form';


class App extends React.Component{
    /*constructor(props){
        super(props);
        this.state = {
           profiles: testData,
        };
    }*/

    state ={
        profiles : [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };

  render(){
    return (
        <div>
            <div className="header">{this.props.title}</div>
            <Form onSubmit={this.addNewProfile}/>
            <CardList profiles={this.state.profiles}/>
        </div>
    );
  }
}

/*const App = ({title}) => (
    <div className="header">{title}</div>
);*/

export default App;
