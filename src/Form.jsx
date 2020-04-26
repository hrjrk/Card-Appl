import React from 'react';
import './css.css';
import axios from "axios";

class Form extends React.Component{

    state = {userName: ''};

    handleSubmit= async(event) => {
      event.preventDefault();
      const resp = await
        axios.get(`https://api.github.com/users/${this.state.userName}`);
        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });
    }

    render (){
        return(
            <form onSubmit={this.handleSubmit} >
              <input
                  type="text"
                  placeholder="Github UserName"
                  value  = {this.state.userName}
                  onChange={event => this.setState({userName : event.target.value})}
                  required/>
                <button>Add Card</button>
    </form>
        );
    }
}

export default Form;