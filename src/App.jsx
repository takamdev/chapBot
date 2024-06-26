import { FaRobot } from "react-icons/fa"; 
import { BsFillArrowUpSquareFill } from "react-icons/bs"; 
import Type from './components/Type'
import { useState } from "react";

function App() {
  const [text,setText] = useState("")
  const [typed,setTiped]=useState('')

  const add =()=>{
    setTiped(text)
    setText("")
  }

  return (
    <main className='container'>
      <p className="text-end mt-3 fs-4">Chat Bot <FaRobot className="bot-logo"/></p>
      <section className='container-fluid'>
         <div className="content-response">
          {/* message de chat GPT */}
          <Type text={typed} dependance={typed} />
         </div>
         <div className='content-champ'>
           <textarea value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Message ChatGPT" className='text-white' rows="10" cols="10">
           </textarea>
           <BsFillArrowUpSquareFill  onClick={add} role="button" className={`arrow ${text.length&& "disabled"}`} />
           <span className="spinner-grow loading d-none" role="status">
           </span>
         </div>
      </section>
      <p className="mt-3 fs-4" >
        realiser pas 
        <b style={{color:"#0ef",marginLeft:"5px"}}>Takam Loic Junior</b>
        <img className="fs-6 ms-2 rounded-circle" src="/image/toff.png" width = "50" alt="photo" />
      </p>
    </main>
  )
}

export default App