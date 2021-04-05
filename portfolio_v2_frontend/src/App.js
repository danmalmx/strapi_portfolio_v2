import './App.css';
import mockPage from './utils/page'
import Quote from './components/Quote'
import Article from './components/Article'
import Entry from './components/Entry'
import Complex from './components/Complex'

function App() {

  console.log('App.render mockPage', mockPage);
  return (
    <div className="App">
      {mockPage.content.map((component) => (
        <>
        {component.__component === 'page.quote' &&
        <Quote data={component }/>
        }
        {component.__component === 'page.article' &&
        <Article data={component }/>
        }
        {component.__component === 'page.entry' &&
        <Entry data={component }/>
        }
        {component.__component === 'page.complex-entry' &&
        <Complex data={component }/>
        }
        </>
      ))}
    </div>
  );
}

export default App;
