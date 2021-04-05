import './App.css';
import mockPage from './utils/page'
import Quote from './components/Quote'
import Article from './components/Article'
import Entry from './components/Entry'

function App() {

  console.log('App.render mockPage', mockPage);
  return (
    <div className="App">
      <Quote data={mockPage.content[0]}/>
      <Article data={mockPage.content[1]} />
      <Quote data={mockPage.content[2]} />
      <Entry data={mockPage.content[3]} />
    </div>
  );
}

export default App;
