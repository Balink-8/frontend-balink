import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentExample from "./components/ComponentExample";
import DataTable from "./components/Table/DataTable";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<ComponentExample />} />
      </Routes> */}
      <DataTable/>
    </BrowserRouter>
  );
}

export default App;
