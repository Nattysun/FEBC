import React, { useState } from "react"




const Login = () => {
  const [Username, setUsername] = useState<string>();
  const [Password, setPassword] = useState<string>();



  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    console.log(Username);
  }
  
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log(Password);
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");
  }


  return (
    <>
    <div>Login</div>
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="username" name="username" onChange={onChangeUsername}/>
        <input type="password" id="password" name="password" onChange={onChangePassword}/>
        <input type="submit" />
      </form>
    </div>
    </>
  )
  
}

/*
function Login() {
  return (
    <>
        <h1>Login</h1>
        Username :<input type='Text'></input>
        Password :<input type='password'></input>
        <input type='submit'></input>
    </>
  )
}
*/

export default Login