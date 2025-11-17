import "./App.css";
import { Dashboard } from "./routes/app/dashboard";

function App() {
  return (
    <Dashboard
      symbol="IBM"
      apikey={import.meta.env.VITE_API_KEY || "demo"}
      refreshInterval={60000}
    />
  );
}

export default App;
