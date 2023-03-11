import './App.css'
import MousTracker from "./hoc/MouseTracker.jsx"
import {FooterMouseTracker, HeaderMouseTracker, MainMouseTracker} from "./component/Header/Header";

function App() {
    console.log(MousTracker)


    return (
        <div className="App">
            <HeaderMouseTracker/>
            <MainMouseTracker/>
            <FooterMouseTracker/>

        </div>
    )
}

export default App
