import Attribution from './components/Attribution'

const App = () => {
  return (
    <div className="bg-app relative flex min-h-screen justify-center items-center pb-10">

      <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </div>
    </div>
  )
}

export default App
