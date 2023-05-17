import { useState } from "react";

const Login = () => {
    const [showError , setShowError] =  useState('')
    const loginHandler= event =>{
        event.preventDefault();

        const form =  event.target;
       
        const email = form.email.value;
        const pass = form.password.value;
        console.log( email,pass );
        form.reset()

        signInUser(email, pass)
        .then(result =>{
            const user =  result.user;
            console.log(user);
            setShowError('');
            navigate(from , {replace:true})
           
            
        })
        .catch(error=>{
            console.log(error.message);
            setShowError(error.message.slice(9,100))
        })

    }

    // google login
    const googleHandler =() =>{
        loginWithGoogle()
        .then(result =>{
            const user =  result.user;
            navigate(from , {replace:true})
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }


  return (
    <div className="w-25 mx-auto my-5 shadow-lg p-4 rounded-2">
       <form onSubmit={loginHandler}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            required
          />
         
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            required
          />
        </div>
                <p>{showError}</p>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p><small>Don’t have an account? <Link to="/register">Create an account</Link></small> </p>
      </form>
      <div className="list-group">
  <Link onClick={googleHandler} className="list-group-item list-group-item-action " aria-current="true">
   <FaGoogle></FaGoogle> Login with Google
  </Link>
</div>
    </div>
  );
};

export default Login;
