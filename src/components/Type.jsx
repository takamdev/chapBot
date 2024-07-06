import React from 'react';
import { useState } from 'react';
import Typed from 'typed.js';

function Type({text,hauteur}) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  const [complet,setComplet]=useState(true)
  const [outText,setOutText]= useState([])
  React.useEffect(() => {
    setComplet(true)
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 10,
      showCursor:false,
      onComplete:(self)=>{
        setComplet(false)
        setOutText(v=>[...v,{msg:text,haut:hauteur}])
      }
      
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
   
  }, [text]);

  return (
    <div className="App">
      {
        outText.map((item,key)=>{
          return <span key={key}>{item.haut}  {item.msg} <br /></span>
        })

       
      }
      {
         <span className={!complet && 'visually-hidden'} ref={el} />
      }
    </div>
  );
}

export default Type