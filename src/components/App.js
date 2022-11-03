
import Header from './Header';
import {useState} from "react";
import Speakers from './Speakers';

function App(){
    
    const [theme , setTheme] = useState("Light");

    return(
      
       <div className={theme === "Light" ? "container-fluid bg-light " :
       "container-fluid bg-dark"}> 
        <Header  theme={theme}/>
        <Speakers theme={theme} setTheme={setTheme}/>
       </div>
    );
}

export default App;