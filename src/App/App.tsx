import React from 'react';
import { useState, useEffect } from 'react';
import { fetchFlag } from './fetch/fetchFlag';
import logo from './logo.svg';
import './App.css';

const App = () => {
  // State vars
  const [loading, setLoading] = useState<boolean>(true);
  const [flag, setFlag] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);

  // Fetch the flag!
  useEffect(() => {
    const onLoad = (val: string) => {
      setFlag(val);
      setLoading(false);
    };

    fetchFlag().then(onLoad).catch(console.error);
  }, []);

  // Create our interval to type out the flag!
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter: number) => {
        if (prevCounter + 1 > flag.length) {
          clearInterval(interval);
          return prevCounter;
        } else {
          return prevCounter + 1;
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, [flag]);


  // No flag or still loading render the loading indicator
  if (loading || !flag || !flag.length) {
    return <div className="Flag-Display">Loading...</div>;
  }

  // Display our flag
  // I know the instructions asked for a list but as I started to implement this a substring felt easier and looks a bit cleaner
  // I could have used .map() to display from 0 - counter but for the current assignment it felt a bit like overkill
  return (
    <>
      <div className="Flag-Display">{flag.substring(0, counter + 1)}</div>
    </>
  );
}

export default App;
