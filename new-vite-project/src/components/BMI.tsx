import React, { useState } from "react"


const BMI = () => {
  const [Weight, setWeight] = useState<number>(0);
  const [Height, setHeight] = useState<number>(0);
  const [BMI, setBMI] = useState<number>(0);


  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
  }
  const onChangeHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(+event.target.value);
  }

  const calculateBMI = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const BMI = Weight / (Height/100) ** 2
    setBMI(BMI)
  }


  return (
    <>

    <h1>BMI: {BMI} </h1>
    <div>
      <form onSubmit={calculateBMI}>
        <label htmlFor="bmi">Weight</label>
        <input type="text" id="weight" name="weight" onChange={onChangeWeight}/>
        <label htmlFor="bmi">Height</label>
        <input type="text" id="height" name="height" onChange={onChangeHeight}/>
        <input type="submit" />
      </form>
    </div>
    </>
  )
  
}


export default BMI