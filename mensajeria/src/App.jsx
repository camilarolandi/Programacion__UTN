/* cuando escribo JSX hago el import con import */
/* aca en App importo el screen de chat */
import React from 'react'
import { ChatScreen } from './Components/Screens'




const App = () => {

return(
  <div className='chat'>

  <ChatScreen/>
  
  </div>

)

}

export default App


