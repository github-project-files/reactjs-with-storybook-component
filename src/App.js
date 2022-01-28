import logo from "./logo.svg";
// import "./App.scss";
import Button from './components/button';
import Accordion from './components/accordion';
function App() {
    return (
        <div className="App">
            <header className="App-header">
            <Accordion>fjdscjasa</Accordion>
            <Accordion>fjdscjasa</Accordion>
            <Accordion>fjdscjasa</Accordion>
                <Button className="storybook-button--primary">test</Button>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}

export default App;
