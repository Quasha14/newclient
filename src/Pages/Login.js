
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {auth, provider} from "../firebase";
import {signInWithPopup, signOut}from "firebase/auth"
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';


function Login() {

const [myMessage, setMessage] = useState("Human!")
const [user, loading, error] = useAuthState(auth);



const googleProvider = (e) =>{
    signInWithPopup(auth,provider)
    .then((results)=>{
        setMessage(` I'm logged!!`);
        console.log(results);

    }).catch((error) =>{
        console.log(error.message);
    })
}


const logOut = () =>{
    signOut(auth).then(() => {
       setMessage("Bye!")
      }).catch((error) => {
       console.log(error.message);
      });

}






  return (
    <div>

        <Container>



        <Button>
        <Link to="/">
        <button>Home</button>
        </Link>

        </Button>
     
     
        <div >Hello  {user?.displayName} {user?.email} {myMessage}</div>

            <Button>
            <button onClick={googleProvider}>Google Login</button>
          
            </Button>
     
     <Button>
     <button onClick={logOut}>Log Out</button>
     </Button>


        </Container>
       

    </div>
  )
}

export default Login;

const Container = styled.div`
margin-top: 100px;
margin-left:300px;
`;
const Button = styled.div`
margin-top:100px;
margin-bottom:100px;


`;

