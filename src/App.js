import React, {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [name, setName]=useState('');

  useEffect(()=>{
    const getName=async ()=>{
      try {
        const resp=await axios.get('http://13.233.193.253:3000/name');
        if(resp.data){
          setName(resp.data?.name);
        }


      } catch (error) {
        console.log(error);
      }

    }

    getName();
  }, [])
  return (
    <div className="App" style={{width:'100%', textAlign:'center', paddingTop:'10px', color:'darkviolet'}}>
      {
        `Hello ${name}`
      }
    </div>
  );
}

export default App;
