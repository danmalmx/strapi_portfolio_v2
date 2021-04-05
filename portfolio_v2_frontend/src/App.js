import './App.css';
import mockPage from './utils/page'
import Quote from './components/Quote'
import Article from './components/Article'

function App() {

  console.log('App.render mockPage', mockPage);
  return (
    <div className="App">
      <Quote data={mockPage.content[0]}/>
      <Article data={mockPage.content[1]} />
    </div>
  );
}

export default App;
