 import Register from "./pages/Register/register";
import  Category from "./pages/Category/Category";
import { BrowserRouter, Routes, Route} from "react-router-dom" ;

function App() {
  return (
    <div className="App">
           <BrowserRouter>
            <Routes path="/">
                <Route path="/register" element={<Register/>} />
                <Route path="/category" element={<Category/>} />
            </Routes>
           </BrowserRouter>
          
    
    </div>
  );
}

export default App;
