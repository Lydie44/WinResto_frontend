// App.tsx
import { useState } from "react";
import { WaiterApp } from "./components/waiter/WaiterApp";

function App() {
  const [showWaiter, setShowWaiter] = useState(true);

  if (!showWaiter) {
    return <div>Page d'acceuil</div>;
  }

  return <WaiterApp onBack={() => setShowWaiter(false)} />;
}

export default App;