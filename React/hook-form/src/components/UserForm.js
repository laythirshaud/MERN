import React, {useState} from 'react'
const UserForm = (props) => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser ={firstname, lastname, email, password, confirmpassword}
        console.log("Welcome", newUser);
        
    };
    return (
        <form onSubmit ={createUser}>
            <div>
                <label>First name :</label> <br></br>
                <input type="text" onChange={(e)=> setFirstname (e.target.value)} />
            </div>
            <div>
                <label>Last name:</label><br></br>
                <input type="text" onChange= {(e)=> setLastname(e.target.value)} />
            </div>
            <div>
                <label>Email:</label><br></br>
                <input type="text" onChange= {(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label>Paasword:</label><br></br>
                <input type="text" onChange= {(e)=> setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Paasword:</label><br></br>
                <input type="text" onChange= {(e)=> setConfirmpassword(e.target.value)} />
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

