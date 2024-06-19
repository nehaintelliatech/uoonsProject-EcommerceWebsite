import './App.css'
import Header from './components/Header'
// import NewFooter from './components/NewFooter'
import NewFooter from './components/NewFooter'

function App() {

  return (
    <>
    <div className='flex flex-col w-full items-center'>
      <Header />
      <div className='h-[500px] bg-black'></div>
      <NewFooter />

    </div>
      
    </>
  )
}

export default App
