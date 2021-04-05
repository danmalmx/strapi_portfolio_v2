import './App.css';
import mockPage from './utils/page'
import Quote from './components/Quote'

function App() {

  console.log('App.render mockPage', mockPage);
  return (
    <div className="App">
      <Quote data={mockPage.content[0]}/>
    </div>
  );
}

export default App;
