import { useState } from "react"

function App() {

  const [confirmState, setConfirmState] =  useState(false);

  function change() {
    setConfirmState(!confirmState);
  }

  return (
    <section className="app">
      {confirmState ? 

       <div className="code-box">
           <h1>Enter Confirmation Code</h1>
           <p>a confirmation code has been sent to the number/email associated with this account</p>
           <input type="number" />
           <button onClick={change}>Confirm</button>
      </div> :

      <div className="login-box">
        <div className="logo">
          <img src="https://www.card.fnbo.com/content/dam/fnbo/logos/fnbo-simple-green.svg" alt="" />
        </div>
        <div className="main">
          <div className="head"><p>Sign In</p></div>
          <div className="inputs">
            <div className="inner-input">
              <p>User ID</p>
              <input type="text" />
            </div>
            <div className="inner-input">
              <p>Password</p>
              <input type="text" />
            </div>
          </div>
          <div className="remember">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="sign-btn">
            <button onClick={change}>Sign In</button>
          </div>
        </div>
      </div>

}



      <div className="policy">
        <p>Policy</p>
        <p>Security statement</p>
        <p>Member FDIC</p>
        <img src="https://www.securebanklogin.com/brand/images/logo-equal-housing-lender.png" alt="" />
      </div>
    </section>
  )
}

export default App
