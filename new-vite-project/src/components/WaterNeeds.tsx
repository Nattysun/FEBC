import React, { useState } from "react"


const WaterNeeds = () => {
  const [Weight, setWeight] = useState<number>(0);
  const [QtyWater, setQtyWater] = useState<string>();
  const [theme, setTheme] = useState('light');
  const [btnText, setBtnText] = useState('🌙 Dark Mode');

  const onChangeWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+event.target.value);
  }
  
  const calculateWater = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const QtyWater = Weight * 2.2 * 30 / 2
    setQtyWater(QtyWater.toFixed(1))
  }

  const changeTheme = () => {
    if  (theme === 'light'){
      setTheme('dark');
      setBtnText('☀️ Light Mode');
    }else {
      setTheme('light');
      setBtnText('🌙 Dark Mode');
    }
    
}
  return (
    <>
  <body className={`${theme}`}>
  <div>
  <h1>ควรดื่มน้ำวันล่ะเท่าไหร่</h1>
    <h1>{QtyWater} x ml</h1>
    <div>
      <form onSubmit={calculateWater}>
        <label htmlFor="water">Weight: </label>
        <input type="text" id="weight" name="weight" onChange={onChangeWeight}/>
        <input type="submit"/>
      </form>
    </div>
    <button onClick={changeTheme}>{`${btnText}`}</button>
    </div>
    </body>
    </>
  )
  
}
export default WaterNeeds