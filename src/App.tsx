import Attribution from './components/Attribution'
import FAQ from './components/FAQ/FAQ'

const App = () => {
  return (
    <main className="bg-app relative flex flex-col min-h-screen items-center pt-44 pb-10">
      <div className="px-10 md:px-0">
        <FAQ/>
      </div>
      <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </div>
    </main>
  )
}

export default App
