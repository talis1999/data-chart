import Root from "./components/Root.js";
import { DataProvider } from "./components/DataProvider.js";


function App() {
  return (
    <DataProvider>
      <Root />
    </DataProvider>
  );
}

export default App;
