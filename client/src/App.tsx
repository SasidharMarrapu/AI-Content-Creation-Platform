import { ActiveComponentProvider } from "./context/ActiveComponentContext";
import { AuthProvider } from "./context/AuthContext";
import Routers from "./routes/Routers";

export default function App() {
  return (
    <AuthProvider>
      <ActiveComponentProvider>
        <Routers />
      </ActiveComponentProvider>
    </AuthProvider>
  )
}