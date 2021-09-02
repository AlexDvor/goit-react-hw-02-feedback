// import FeedBack from "./components/FeedBack";
import React, { Component } from "react";

import FeedBackButtons from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Container from "./components/Container/Container";
import Section from "./components/Section";




class App extends Component {


    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    updatedState = value => {

        if (value === "good") {
            this.setState((prevState) => {
                return {
                  good: prevState.good + 1
                }
            })
        }

        if (value === "neutral") {
            this.setState((prevState) => {
                return {
                    neutral: prevState.neutral + 1
                }
            })
        }

        if (value === "bad") {
            this.setState((prevState) => {
                return {
                    bad: prevState.bad + 1
                }
            })
        }
    }
  
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = (total) => {
    if (total === 0) {
      return 0;
    }

    const { good } = this.state;
    const percentage = good / total * 100;
    return percentage.toFixed();
    
  }


  render() {
      
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage(totalFeedback);

        return (
            <Container>

                <Section text='please leave feedback'>
                    <FeedBackButtons updatedState={this.updatedState}></FeedBackButtons>
                </Section>

                <Section text='statistics'>
                    <Statistics
                        state={this.state}
                        totalFeedback={totalFeedback}
                        positiveFeedbackPercentage={positiveFeedbackPercentage}>
                    </Statistics>
                 </Section>
            
        </Container>
                        )
                }
            


}

export default App;
