import { SidebarViewProvider } from "./provider/sidebarProvider";
import AppRoutes from "./Routes";

function App() {
  return (
    <SidebarViewProvider>
      <AppRoutes />
    </SidebarViewProvider>
  );
}

export default App;
