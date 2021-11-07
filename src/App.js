import './App.css';

import Card from './Components/Card/Card';

function App() {
  return (
    <div className="w-full min-h-fullscreen flex flex-col bg-gray-200">
      <header className="w-full h-16 bg-white sticky top-0 left-0">

      </header>

      <Card></Card>
    </div>
  );
}

export default App;
