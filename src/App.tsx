import Nav from "./components/Nav"
import Hero from "./components/Hero"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Technologies from "./components/Technologies";


function App() {


  return (
    <>

<Nav/>

<Hero />
<Technologies />
<ToastContainer
position="bottom-center"
autoClose={2500}
theme="light"

/>
    </>
  )
}

export default App
