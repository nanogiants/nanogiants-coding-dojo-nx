// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import api from './api-service.ts';

export function App() {
  const [quoteState, setQuoteState] = useState(null);
  const quotes = await api.getQuotes();


  useEffect(() => {
    const init = async () => {

     const quotes = await api.getQuotes();
     setQuoteState(quotes)
    console.log(quotes);
    }

    init();
  }
  , []);

  return (
    <div>
      <NxWelcome title="coding-dojo-frontend" />
      {quoteState && quoteState.map((quote) => {
        return <div key={quote}>{quote}</div>
      }
      )}
    </div>
  );
}

export default App;
