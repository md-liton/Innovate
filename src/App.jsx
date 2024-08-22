import Apps from "./components/Apps/Apps"
import Banner from "./components/Banner/Banner"
import Business from "./components/Business/Business"
import Nabvar from "./components/Nabvar/Nabvar"
import Platform from "./components/Platform/Platform"
import Work from "./components/Work/Work"

function App() {

  return (
    <>
    <div>
      <Nabvar/>
      <Banner/>
      <Platform/>
      <Business/>
      <Apps/>
      <Work/>
    </div>
    </>
  )
}

export default App
