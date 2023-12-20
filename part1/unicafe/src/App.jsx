import { useState } from 'react';

const Header = ({ text }) => <h1>{text}</h1>;

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (100 * good) / total;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  const statisticsData = [
    { text: 'good', value: good },
    { text: 'neutral', value: neutral },
    { text: 'bad', value: bad },
    { text: 'total', value: total },
    { text: 'average', value: average },
    { text: 'positive', value: `${positive} %` },
  ];

  return (
    <div>
      {statisticsData.map((statistic) => (
        <StatisticLine key={statistic.text} text={statistic.text} value={statistic.value} />
      ))}
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // Save buttons in their own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Header text='give feedback' />

      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />

      <Header text='statistics' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}


export default App;
