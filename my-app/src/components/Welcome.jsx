import React from 'react'

const Welcome = () => {
    
    const bonjour = () => console.log("bonjour");
    const bonsoir = argument => console.log(argument);
    
    return (
    <div>

        <button onClick={bonjour}>Invoque la fonction</button>

        <button onClick = {() => bonsoir("bonsoir")}>invoque une fonction avec argument "bonsoir"</button>

        <button onClick={() => console.log("bonne nuit")}>console log sur le bouton</button>
      
    </div>
  )
}

export default Welcome
