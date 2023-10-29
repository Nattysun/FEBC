
import Dashboard from './components/Dashboard.tsx'
import Login from './components/Login.tsx'
import MyForm from './components/MyForm.tsx'
import BMI from './components/BMI.tsx'
import WaterNeeds from './components/WaterNeeds.tsx'

import './App.css'


function App() {

  let isLogin: boolean = false;

  if(isLogin)
  {
      return (
        <>
        <Dashboard/> 
        <MyForm/>
        <Login />
        <BMI />
        </>
      )
      
  }
  else{
      return (
        <>
        <WaterNeeds/>
        </>
      )
  }


/*
  const [count, setCount] = useState<number>(0);
  return (<>
  
  <List items={["Star","Fork","Fire","Food","Bee"]} render={(item) => <p>{item}</p>}>
  </List>
  <Section title='Heloo'>
      - Hello World
      - Bye Bye World
  </Section>
  <Counter setCount={setCount}>
      Counter = {count}
  </Counter>
  </>
  );*/
}


export default App;