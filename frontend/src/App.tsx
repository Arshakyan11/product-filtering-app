import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { ROUTES } from "./routes/Routes";
import { Home } from "./pages";
import LayOut from "./LayOut/LayOut";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<LayOut />}>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
