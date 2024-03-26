import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Books from "./pages/Books";
import Members from "./pages/Members";
import Checkout from "./pages/Checkout";
import Return from "./pages/Return";
import OverDueBooks from "./pages/OverDueBooks";

function App() {
  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh] bg-slate-900 text-white">
      <Navbar />
      <Routes>
        <Route path="books" element={<Books />} />
        <Route path="members" element={<Members />} />
        <Route path="over-due-books" element={<OverDueBooks />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="return" element={<Return />} />
      </Routes>
    </div>
  );
}

export default App;
