import { FaRobot } from "react-icons/fa"; 
import { BsFillArrowUpSquareFill } from "react-icons/bs"; 
import Type from './components/Type'
import { useState } from "react";
import axios from "axios";

function App() {
  const [text,setText] = useState("")
  const [typed,setTiped]=useState('')
  const [haut,setHaut]= useState('')
  const [load ,setLoad]=useState(false) 
  const [textLength, setTextLength] =useState(true)
  const add =()=>{
       setHaut('Vous: ')
       setTiped(text)
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
      setHaut("ChatBot: ")
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

          <Type text={typed} hauteur={haut}/>

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
       <a className="mt-3 fs-4" style={{textDecoration:"none",color:"inherit"}} href="https://takam-loic-junior.vercel.app/">
        réaliser par
        <b style={{color:"#0ef",marginLeft:"5px"}}>Takam Loic Junior</b>
      </a>
      <p className="mt-3">
        <span className="text-danger fs-2">A votre attention</span> <br/>

        Ce chat Bot s’inspire d’un modèle IA de chez Hunging-Face 
        il n’est pas vraiment interlignent je n’ai pas voulue acheter une clés api sur openAI ,mes il est prêt a recevoir une API de openAI  ne soyez pas suprie si
        il vous raconte n’importe quoi. <br/>
       <span className="text-success fw-bold fs-5"> NB : ce chat bot est complet et peut fonctionner correctement si ont l’intègre une API</span>
      </p>
      
    </main>
  )
}

export default App
