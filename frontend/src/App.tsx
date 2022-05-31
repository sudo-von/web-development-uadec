import Router from 'src/router/Router';
import AuthProvider from 'src/providers/auth.provider';

const App = (): JSX.Element => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
