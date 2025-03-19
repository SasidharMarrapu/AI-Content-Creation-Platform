import { AuthProvider } from "./context/AuthContext";
import Routers from "./routes/Routers";

export default function App() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  )
}