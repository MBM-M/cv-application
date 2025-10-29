import { GeneralInfo, EducationalExp, PracticalExp } from './formSections';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {
  //General Info Section
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const fullName = `${firstName} ${lastName}`;

  function logGIData() {
    console.log(firstName, lastName, email, phoneNum);
  }

  //Educational Exp Section
  const [schoolName, setSchoolName] = useState('');
  const [programName, setProgramName] = useState('');
  const [eduStartDate, setEduStartDate] = useState('');
  const [eduEndDate, setEduEndDate] = useState('');

  function logEEdata() {
    console.log(schoolName, programName, eduStartDate, eduEndDate);
  }

  //Practical Experience Section
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [practicalStartDate, setPracticalStartDate] = useState('');
  const [practicalEndDate, setPracticalEndDate] = useState('');

  function logPEdata() {
    console.log(company, position, mainTasks, practicalStartDate, practicalEndDate);
  }

  const [ genInfoStatus, setGenInfoStatus ] = useState(1);
  function submitGenInfo() {
    genInfoStatus === 0 ? setGenInfoStatus(1) : setGenInfoStatus(0);
  }

  const [ eduExpStatus, setEduExpStatus ] = useState(1);
  function submitEduExp() {
    eduExpStatus === 0 ? setEduExpStatus(1) : setEduExpStatus(0);
  }

  const [ practExpStatus, setPractExpStatus] = useState(1);
  function submitPractExp() {
    practExpStatus === 0 ? setPractExpStatus(1) : setPractExpStatus(0);
  }
  
  return (
    <>
      <div>
        {genInfoStatus ? (
        <GeneralInfo
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNum={phoneNum}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setPhoneNum={setPhoneNum}
        />) : <><p>
          {fullName && `Name: ${fullName}`}<br />
          {email && `Email: ${email}`}<br />
          {phoneNum && `Num: ${phoneNum}`}
                </p> 
               <hr />
              </>
        }

        <button onClick={submitGenInfo}> {genInfoStatus ? "Submit General Info" : "Edit General Info"}</button>

        {eduExpStatus ? 
          <EducationalExp 
          schoolName={schoolName}
          programName={programName}
          eduStartDate={eduStartDate}
          eduEndDate={eduEndDate}
          setSchoolName={setSchoolName}
          setProgramName={setProgramName}
          setStartDate={setEduStartDate}
          setEndDate={setEduEndDate}
          /> : <><p>
        {schoolName && `School: ${schoolName}`} <br /> 
        {programName && `Program: ${programName}`} <br />
        {eduStartDate && `From: ${eduStartDate}`} <br />
        {eduEndDate && `To: ${eduEndDate}`}
                </p>
                <hr />
              </>}
        <button onClick={submitEduExp}> {eduExpStatus ? "Submit Educational Exp" : "Edit Educational Exp"}</button>

        {practExpStatus ?
          <PracticalExp 
          company={company}
          position={position}
          mainTasks={mainTasks}
          startDate={practicalStartDate}
          endDate={practicalEndDate}
          setCompany={setCompany}
          setPosition={setPosition}
          setMainTasks={setMainTasks}
          setStartDate={setPracticalStartDate}
          setEndDate={setPracticalEndDate}
        /> : <>
              <p> {company && `Company: ${company}`}  <br /> 
                  {position && `Position: ${position}`}  <br /> 
                  {mainTasks && `Main Tasks: ${mainTasks}`} <br />
                  {practicalStartDate && `From: ${practicalStartDate}`} <br />
                  {practicalEndDate && `To: ${practicalEndDate}`}</p> </>
                  }
        <button onClick={submitPractExp}> {practExpStatus ? "Submit Practical Exp" : "Edit Practical Exp"} </button>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" style={{ width: '30px', height: '30px' }} />
        </a>
      </div>
      <h5>Vite + React</h5>
    </>
  )
}

export default App