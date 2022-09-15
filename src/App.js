
import './App.css';
import  {useState} from 'react';

function App() {
const [count,setCount]= useState(0) 
  const inc=()=>
  {
      setCount(count+1);    
  };
  const dec=()=>
  {
    setCount(count-1);
  };
  return (
    <>
    <div class="container">
    <div>
    <h1>COUNTER APP</h1>
    </div>
    <div style={{
      display:'flex',
      justifyContent:'center',
      backgroundColor: '#8758ff',
         alineItems:'center',
         marginBlock:'10px',
         padding:'10px',
         borderRadius:'10px',
  }}>
      <h2>count - {count} </h2>
      </div>
     <div>
      <button onClick={inc}>➕</button>
     <button onClick={dec}>➖</button>
     </div>
     </div>
     
    </>
          
  );
}

export default App;
