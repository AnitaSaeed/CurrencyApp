import React, {useState , useEffect} from 'react'
import './App.css'

function App() {
  const api="https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
  
  const[currency,setCurrency] = useState([])

  useEffect(() => {
    fetch(`${api}`)
    .then(res => res.json())
    .then((result) =>{
    setCurrency(result)
    console.log(result)})
  }, [])
  
  return (
    <div className="app">
      <div className="main">
        <div className="header">سامانه نرخ ارز سنا</div>
        
      </div>
     
    </div>
  );
}

export default App;
