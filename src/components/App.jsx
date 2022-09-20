import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import SectionTitle from "./SectionTitle";
import Statistics from "./Statistics";
import Notification from "./Notification";

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = e => {
    const { textContent: btnName } = e.target;

    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }))
  };

  countTotalFeedback = () => {
    const stateValuesArr = Object.values(this.state);

    return stateValuesArr.reduce((total, value) => {
      return total += value
    })
  };

  countPositivePercentage = () => {
    const numPositiveFeedback = this.state.Good;

    return Math.round(((numPositiveFeedback * 100) / this.countTotalFeedback()));
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const statesKeys = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <div
        className="appFeedback"
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 'auto',
          marginLeft: 'auto',
          width: '500px',
          minHeight: '300px',
          fontSize: 20,
          color: '#010101',
        }}
      >
  
        <SectionTitle title='Please leave feedback' className='feedbackOptions'>
          <FeedbackOptions
            options={statesKeys}
            onLeaveFeedback={this.onLeaveFeedback} />
        </SectionTitle>
  
        <SectionTitle title='Statistics' className='feedbackStatistics'>
          {totalFeedback === 0
            ? (<Notification message='There is no feedback' />)
            : <Statistics
                good={Good}
                neutral={Neutral}
                bad={Bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositivePercentage()} />
          }
        </SectionTitle>
        
      </div>
    );
  };
};

export default App;