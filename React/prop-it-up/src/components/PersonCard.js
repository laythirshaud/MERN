import React from 'react';
class PersonCard extends React.Component{
    render(){
    const {firstName ,lastName, Age ,hairColor}=this.props;
        return (
            <div>
                <h1> {firstName}, {lastName}</h1>
                <p>Age: {Age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        );
    }
    

}
export default PersonCard;


