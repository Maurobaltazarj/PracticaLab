import './App.css'
import Aside from './components/aside';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

function App() {
  return <div className='App'>

    <div className='container'>

      <div className='header'>
        <Header title='Titulo Header' 
        description='Description Header'/>
      </div>

      <div className='aside'>
      <Aside />
      </div>

      <div className='main'>
      <Main title='Titulo Main' 
      description='Description Main'/>
      </div>

      <div className='footer'>
      <Footer />
      </div>
      </div>
  </div>;
}

export default App
