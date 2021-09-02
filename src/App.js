// import FeedBack from "./components/FeedBack";
import React, { Component } from "react";

import FeedBackButtons from "./components/FeedBackButtons";
import FeedBackStat from "./components/FeedBackStat";
import Container from "./components/Container/Container";




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
        

    render () {
        return (
        <Container>
            <FeedBackButtons updatedState={this.updatedState}></FeedBackButtons>
            <FeedBackStat state={this.state}></FeedBackStat>
        </Container>
                        )
                }
            


}

export default App;
