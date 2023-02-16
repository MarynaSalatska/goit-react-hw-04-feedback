import React, { Component,useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export function App () {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const onLeaveFeedback = e => {
    const { name } = e.target;
    (prevState => ({ [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.ceil((good / countTotalFeedback()) * 100)
      : 0;
  };


    const total = countTotalFeedback();
    const positivePercentage =countPositiveFeedbackPercentage();
    //  const { good, neutral, bad } = useState;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(value)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }

