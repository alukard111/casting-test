import './style/scss/index.scss';
import HeaderBase from './components/HeaderBase'
import StartScreen from './components/Screen/StartScreen';
import SecondBlock from './components/SecondBlock';
import SliderBlock from './components/SliderBlock';
import SocialBlock from './components/SocialBlock';
import FreeAccess from './components/FreeAccess';
import FooterBase from './components/FooterBase';

import NavigationBlock from './components/SecondPage/NavigationBlock';
import { useEffect, useState } from 'react';
// function App() {
//   return (
//     <div className="App">
//       <header className="app-header">

//       </header>
//     </div>
//   );
// }

export const App = (props) => {
  const [accountPage, setAccountPage] = useState(false)

  const signIn = () => {
    setAccountPage(!accountPage)
  }
  const exitSignIng = () => {
    setAccountPage(false)
  }
  
  useEffect(() => {
    if (window) {
      window.scrollTo(0,0)
    }
  }, [accountPage])
  return <>
    <div className="App">
      <header className="app-header">
        <HeaderBase exitPage={exitSignIng} />
      </header>
      <div className='app-body-block'>
        { !accountPage ?  
        // {/* ============================= FIRST PAGE ============================= */}
          // {/* ПЕРЕИМЕНОВАТЬ В АДЕКВАТНЫЙ ПЕРВЫЙ БЛОК */}
          <>
            <StartScreen enterSignIn={signIn} /> 
             {/* ВТОРОЙ БЛОК */}
            <SecondBlock/> 
             {/* БЛОК СО СЛАЙДЕРОМ */}
            <SliderBlock enterSignIn={signIn}/> 
             {/* WHOT PEOPLE SAY */}
            <SocialBlock/> 
             {/* FREE ACCESS */}
            <FreeAccess enterSignIn={signIn}/> 
          </> :
          // {/* ============================= END PAGE =============================== */} 
          <>
            {/* =================================== SECOND PAGE =================================== */}
            <NavigationBlock/>
          
          </>
        
        }
      

       
      </div>
      <div className='app-footer-block'>
        <FooterBase/>
      </div>
    </div>
  </>
};

export default App;
