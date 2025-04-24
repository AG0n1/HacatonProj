import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {routesGenerator} from "./utils/generators.tsx";
import {logoutUser} from "./constants/routes.config.tsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {routesGenerator(logoutUser)}
                <Route
                    path={'*'}
                    element={
                        <Navigate
                            to={'/login'}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
