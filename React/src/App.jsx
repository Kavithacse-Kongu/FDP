import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Service from "./pages/Service";
import State from "./hooks/State";
import Form from "./hooks/Form";
import { createContext, useEffect } from "react";
import Effect from "./hooks/Effect";
import Ref from "./hooks/Ref";
import Reducer from "./hooks/Reducer";
import Todos from "./pages/Todos";


function App(){
  let name ='vijay'
 

  // useEffect(()=>{
  //   console.log("Component mounted")
  //   return(()=>{
  //     console.log("component unmounted");     
  //   })
  // },[])
  return(
    <>
        
        <Navbar/>
        <Todos/>
        <Routes>
          <Route path="/" element={<Home name={name}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/effect" element={<Effect/>}/>
          <Route path="/ref" element={<Ref/>}/>
          <Route path="/reducer" element={<Reducer/>}/>
        </Routes>
    </>
  )
}

export default App;