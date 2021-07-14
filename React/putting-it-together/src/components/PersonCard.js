import React  from 'react';

class PersonCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Age : this.props.Age
        };
    }
        // addAge = () => {
        //     this.setState({Age:this.state.Age +=1});
        // }
    
    render(){
    const {firstName ,lastName,hairColor}=this.props;
    const {Age} = this.state;
    
        return (
            <div>
                <h1> {firstName}, {lastName}</h1>
                <p>Age: {Age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ () => { this.setState({Age:this.state.Age +=1}) } }>birthday for {firstName} {lastName}</button>
                {/* <button onClick={ this.addAge} >birthday</button> */}
            </div>
        );
        }
    
    
}
export default PersonCard;

