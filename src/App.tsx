import Attribution from './components/Attribution'
//import QRCode from './components/QRCode'

const App = () => {
  return (
    <div className="bg-app relative flex min-h-screen justify-center items-center py-10">

      <div className="absolute bottom-0 w-full h-10 flex items-center justify-center">
        <Attribution/>
      </div>
    </div>
  )
}

export default App
