import { useState } from "react";

// formSections.jsx
export function GeneralInfo({
  firstName,
  lastName,
  email,
  phoneNum,
  setFirstName,
  setLastName,
  setEmail,
  setPhoneNum
}) {

  return (
    <>
      <section>
        <h2>General Information</h2>
        <label>
          First name:{' '}
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label><br />
        <label>
          Last name:{' '}
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label><br />
        <label>
          Email:{' '}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label><br />
        <label>
          Phone:{' '}
          <input type="tel" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} />
        </label>
        <hr />
      </section>
    </>
  );
}


export function EducationalExp({
  schoolName,
  programName,
  startDate,
  endDate,
  setSchoolName,
  setProgramName,
  setStartDate,
  setEndDate
}) {

  return (
    <>
      <section>
        <h2>Educational Experience</h2>
        <label>
          School: {' '}
          <input 
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Program: {' '}
          <input 
            value={programName}
            onChange={(e) => setProgramName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Start Date: {' '}
          <input 
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date: {' '}
          <input 
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </section>
      <hr />
    </>
  )
}

export function PracticalExp({
  company,
  position,
  mainTasks,
  startDate,
  endDate,
  setCompany,
  setPosition,
  setMainTasks,
  setStartDate,
  setEndDate
}) {

  return (
    <>
      <section>
        <h2>Practical Experience</h2>
        <label>
          Company Name: {' '}
          <input 
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>
        <br />
        <label>
          Position: {' '}
          <input 
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <br />
        <label>
          Main Tasks: {' '}
          <textarea 
            value={mainTasks}
            onChange={(e) => setMainTasks(e.target.value)}
            placeholder={`• Task 1\n• Task 2\n• Task 3`}
            style={{ width: '200px', height: '75px' }}
          />
        </label>
        <br />
        <label>
          Start Date: {' '}
          <input 
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date: {' '}
          <input 
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </section>
      <hr />
    </>
  )

}