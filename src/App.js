import React, { useState, useEffect } from 'react';

const TARGET_DATE = new Date('2025-03-20T00:00:00');

const App = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date();
    const diff = TARGET_DATE - now;
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="App">
      <h1>Countdown to Spring 2025</h1>
      <div className="countdown">
        <div className="time-block">
          <span className="time">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-block">
          <span className="time">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-block">
          <span className="time">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-block">
          <span className="time">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
      {/* Additional functionalities: include buttons for pause/resume or share */}
      <div className="actions">
        <button onClick={() => window.alert("Share functionality coming soon!")}>Share</button>
      </div>
    </div>
  );
};

export default App;
