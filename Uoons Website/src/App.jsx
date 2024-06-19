import './App.css'
import Header from './components/Header'
// import NewFooter from './components/NewFooter'
import NewFooter1 from './components/NewFooter1'

function App() {

  return (
    <>
    <div className='flex flex-col w-full items-center'>
      <Header />
      <div className='h-[500px] bg-black'></div>
      <NewFooter1 />

    </div>
      
    </>
  )
}

export default App
