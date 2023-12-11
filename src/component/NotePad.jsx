import React, { useRef } from 'react'

function NotePad() {

  const userInp = useRef();
  const userOp = useRef();

  const convertUpper = () => {
    let inp = userInp.current.value;
    let upperInp = inp.toUpperCase();
    userOp.current.value = upperInp;
  }
  const convertLower = () => {
    let inp = userInp.current.value;
    let upperInp = inp.toLowerCase();
    userOp.current.value = upperInp;
  }

  const convertCapitalize = () => {
    let inp = userInp.current.value;

    const words = inp.split(" ");

    let capitalizeString = words.map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
    userOp.current.value = capitalizeString;
  }

  const copytext = () => {
    let opText = userOp.current.value;
    navigator.clipboard.writeText(opText);
    alert("Text copied.")
  }

  return (
    <div className='container'>

      <h1 className='text-center my-4'>Advance NotePad</h1>
      <div>
        <textarea name="userInp" id="userInp" cols="30" rows="10" className='w-100 fs-3 form-control' ref={userInp} ></textarea>

        <div className='w-100 d-flex justify-content-center my-3'>
          <button className='btn btn-dark mx-2 px-5 form-control' onClick={convertUpper}>uppercase</button>
          <button className='btn btn-dark mx-2 px-5 form-control' onClick={convertLower}>lowercase</button>
          <button className='btn btn-dark mx-2 px-5 form-control' onClick={convertCapitalize}>capitalize</button>
        </div>

        <textarea name="userInp" id="userInp" cols="30" rows="10" className='w-100 fs-3 form-control' ref={userOp} readOnly></textarea>
        <button className='btn btn-dark' onClick={copytext}>copy</button>
      </div>
    </div>

  )
}

export default NotePad
