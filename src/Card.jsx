import React from 'react';

class Card extends React.Component{

    render(){
        const profile = this.props;
        return(
          <div className="github-profile">
              <img alt=" " src={profile.avatar_url} style ={{ width: '75px'}}/>
              <div className="info">
                  <div className="name">{profile.name}</div>
                  <div className="company">{profile.company}</div>
              </div>
          </div>
        );
    }
}

export default Card