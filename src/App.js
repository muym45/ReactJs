// App.js
import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import { UserContext, UserProvider } from './UserContext';
import { CounterContext, CounterProvider } from './CounterContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1>{`Current theme: ${theme}`}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const UserInfo = () => {
  const { user, loginUser, logoutUser } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <>
          <h1>{`Welcome, ${user.name}`}</h1>
          <button onClick={logoutUser}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please login</h1>
          <button onClick={() => loginUser({ name: 'John Doe' })}>Login</button>
        </>
      )}
    </div>
  );
};

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>{`Count: ${state.count}`}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <ThemeSwitcher />
      <UserInfo />
      <Counter />
    </div>
  );
}

export default function Root() {
  return (
    <ThemeProvider>
      <UserProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
