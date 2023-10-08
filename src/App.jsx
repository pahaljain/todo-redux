import InputForm from "./components/InputForm"
import InputItem from "./components/InputItem"

function App() {

  return (
    <div className="w-1/2">
      <h1 className="heading">Redux Todo</h1>
      <div className="box">
        <InputForm />

        <InputItem />
      </div>
      
    </div>
  )
}

export default App
