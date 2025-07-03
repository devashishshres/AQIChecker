import './App.css'
import { Search } from './components/Search'

function App() {

  return (
    <main>
      <div className='flex flex-col items-center min-h-screen gap-14'>
        <h1 className='mt-12 text-5xl font-semibold'>AirAware</h1>
        <Search />
      </div>
    </main>
  )
}

export default App
