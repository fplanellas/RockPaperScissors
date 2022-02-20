import { Routes, Route, BrowserRouter  } from "react-router-dom";
import GameScreen from "../components/GameScreen";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>    

          <Route path="/" element={<GameScreen />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
