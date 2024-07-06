import { FaRobot } from "react-icons/fa"; 
import { BsFillArrowUpSquareFill } from "react-icons/bs"; 
import Type from './components/Type'
import { useState } from "react";
import axios from "axios";

function App() {
  const [text,setText] = useState("")
  const [typed,setTiped]=useState('')
  const [load ,setLoad]=useState(false) 
  const [textLength, setTextLength] =useState(true)
  const add =()=>{
      // API key :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 
      setLoad(true)
    axios.post("https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B",{"inputs":text},
      {
        headers:{
          'Authorization': 'Bearer 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',
           'Content-Type': 'application/json'
       }
      }
    ).then(res=>{
      setTiped(res.data[0].generated_text)
      setLoad(false)
    }).catch(err=>console.log(err))


    setText("")
    setTextLength(true)


  }

  return (
    <main className='container'>
      <p className="text-end mt-3 fs-4">Chat Bot <FaRobot className="bot-logo"/></p>
      <section className='container-fluid'>
         
         <div className="content-response">
          {/* message de chat GPT */}
          <Type text={typed}/>
         </div>
         <div className='content-champ'>
           <textarea value={text} onChange={(e)=>{
             setText(e.target.value)

             if(text.length!==0) setTextLength(false)

           }} placeholder="Message ChatGPT" className='text-white' rows="10" cols="10">
           </textarea>
           {
            load ? (
            <span className="spinner-grow loading" role="status"></span>

            ):(
              <button disabled={textLength} className={`arrow`} ><BsFillArrowUpSquareFill onClick={add} role="button"  /></button>
            )
            }
           
           
         </div>
      </section>
      <p className="mt-3 fs-4" >
        realiser pas 
        <b style={{color:"#0ef",marginLeft:"5px"}}>Takam Loic Junior</b>
        <img onClick={()=>{window.location.href="https://loic-portfoli0.netlify.app/"}} role="button" className="fs-6 ms-2 rounded-circle" src="/image/toff.png" width = "50" alt="photo" />
      </p>
      
    </main>
  )
}

export default App