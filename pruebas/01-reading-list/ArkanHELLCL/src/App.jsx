import { library as initialLibrary } from './mocks/library.json'
import { Library } from './components/Library.jsx'
import { DarkModeToggle } from './components/darkMode.jsx'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.jsx'
import { ReadingList } from './components/readingList.jsx'
import { Pagination } from './components/Pagination.jsx'
import { ReadingListProvider } from './context/readingList.jsx'

function App() {  
  const {filterLibrary} = useFilters()

  const filteredLibrary = filterLibrary(initialLibrary)

  return (
    <ReadingListProvider>
      <div className="py-2 dark:bg-gray-900 bg-gray-100 z-0 w-screen px-10 sm:min-w-[400px] min-h-screen h-fit">
        
        <DarkModeToggle />
        <Header />
        <ReadingList />
        <main className='flex items-center justify-center'>
          <Library library = { filteredLibrary }/>      
        </main>
        <Pagination />
      </div>
    </ReadingListProvider>
  )
}

export default App
