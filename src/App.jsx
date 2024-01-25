import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './product'
import Contador from './Contador'
import NavBar from './Components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <>
      <div className='App'>
      <NavBar/>
      <Contador/>
       <Product img='https://th.bing.com/th/id/OIP.7Wred0h7JvAUk2ln7kE9PwHaHa?rs=1&pid=ImgDetMain' 
       title='Raqueta Pure Aero' 
       precio={'950.000'}/>
       <Product img='https://mlstaticquic-a.akamaihd.net/D_NQ_NP_903025-MLU25361654054_022017-O.jpg' 
       title='Raqueta Head Speed' 
       precio={'1.200.000'}/>
       <Product img='https://th.bing.com/th/id/OIP.mNvoKx6SWC12P0vbVHwxhwHaHa?rs=1&pid=ImgDetMain' 
       title='Raqueta Yonex Ezone 100 ' 
       precio={'1.300.000'}/>
      </div>
    </>
  )
}

export default App
