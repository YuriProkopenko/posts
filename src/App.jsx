import AppRouter from "./routing/AppRouter";
import AuthProvider from "./HOCs/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
