import React, {useState} from 'react'
const UserForm = (props) => {
    const [firstname,setFirstname] = useState("");
    const [firstNameError, setFirstnameError] = useState("");
    const [lastname,setLastname] = useState("");
    const [LastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError]= useState("");
    const [password, setPassword] = useState("");
    const [passError, setpassError]= useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [confirmpasswordError, setConfirmpasswordError]= useState("");

    



    const createUser = (e) => {
        e.preventDefault();
        const newUser ={firstname, lastname, email, password, confirmpassword}
        console.log("Welcome", newUser);
        
    }
    const handleFirstName= (e) =>{
        setFirstname (e.target.value);
        if(e.target.value.length <1){
            setFirstnameError ("First Name is required")
        }
        else if(e.target.value.length < 2) {
            setFirstnameError("First Name must be 2 characters or longer!");
        }
        else {
            setFirstnameError("");
        }
    }

    const handleLastName= (e) =>{
        setLastname (e.target.value);
        if(e.target.value.length <1){
            setLastnameError ("Last Name is required")
        }
        else if(e.target.value.length < 2 ) {
            setLastnameError("Last Name must be 2 characters or longer!");
        }
        else {
            setLastnameError("");
        }
    }

    const handleEmail= (e) =>{
        setEmail (e.target.value);
        if(e.target.value.length <1){
            setEmailError ("Email is required")
        }
        else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        }
        else {
            setEmailError("");
        }
    }

    const handlePass= (e) =>{
        setPassword (e.target.value);
        if(e.target.value.length <1){
            setpassError ("Password is required")
        }
        else if(e.target.value.length < 8) {
            setpassError("Password must be 8 characters or longer!");
            
        }
        else {
            setpassError("");
        }
    }

    const handleconfirmpassword= (e) =>{
        setConfirmpassword (e.target.value);
        if(e.target.value!==password){
            setConfirmpasswordError("must be Matched")
        }
        else {
            setConfirmpasswordError("");
        }
    }




    return (
        <form onSubmit ={createUser}>
            <div>
                <label>First name :</label> <br></br>
                <input type="text" onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p style={{color:'red'}} >{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last name:</label><br></br>
                <input type="text" onChange= { handleLastName } />
                {
                    LastnameError ?
                    <p style={{color:'red'}} >{ LastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email:</label><br></br>
                <input type="text" onChange= {handleEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}} >{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Paasword:</label><br></br>
                <input type="text" onChange= {handlePass} />
                {
                    passError ?
                    <p style={{color:'red'}} >{ passError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Paasword:</label><br></br>
                <input type="text" onChange= {handleconfirmpassword} />
                {
                    confirmpasswordError?
                    <p style={{color:'red'}} >{ confirmpasswordError }</p> :
                    ''
                }
            </div>

            <div>
                <br></br>
                    <p>
                    First Name:{firstname}
                    </p><br></br>
                    <p>
                    Last Name:{lastname}
                    </p><br></br>
                    <p>
                    Email:{email}
                    </p><br></br>
                    <p>
                    Paasword:{password}
                    </p><br></br>
                    <p>
                    Confirm Paasword:{confirmpassword}
                    </p>
                
            </div>
        </form>
    );
    
}

export default UserForm;

