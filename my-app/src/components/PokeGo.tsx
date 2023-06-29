import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/actions';
import PokeSheet from './PokeSheet';

const PokeGo = () => {

  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const pokeAuthenticatedCookie = localStorage.getItem('pokeAuthenticated');

    if (pokeAuthenticatedCookie === 'true') {
      setAuthenticated(true);
    }
  }, []);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Replace 'your-password' with your desired password
    const expectedPassword = 'jan';

    if (password === expectedPassword) {
      setAuthenticated(true);
      localStorage.setItem('pokeAuthenticated', 'true');
    } else {
      setPassword('');
      setAuthenticated(false);
    }
  };

  return (
    <div>
      {!authenticated ? (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h1>Welcome to the protected page!</h1>
          <p>This content is only visible if you enter the correct password.</p>
          <PokeSheet/>
        </div>
      )}
    </div>
  );
};

export default PokeGo;
