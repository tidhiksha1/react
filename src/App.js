
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button title="First" appName="React JS application" />
      <Button title="Second" appName="Vue JS application" />
      <Button title="Third"  appName="Angular  JS application" />
      <Button title="Fourth"  appName="React Native  JS application" />
    </div>
  );
}

export default App;
