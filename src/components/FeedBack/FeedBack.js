// import { ConsoleWriter } from 'istanbul-lib-report';
import React, { Component } from 'react';
import FeedBackButtons from './FeedBackButtons';
import FeedBackStat from './FeedBackStat';
import style from './FeedBack.module.css'
 

// class FeedBack extends Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     }

//     updatedState = value => {

//         if (value === "good") {
//             this.setState((prevState) => {
//                 return {
//                     good: prevState.good + 1
//                 }
//             })
//         }

//         if (value === "neutral") {
//             this.setState((prevState) => {
//                 return {
//                     neutral: prevState.neutral + 1
//                 }
//             })
//         }

//         if (value === "bad") {
//             this.setState((prevState) => {
//                 return {
//                     bad: prevState.bad + 1
//                 }
//             })
//         }
//     }
        

//     render () {
//         // const { good, neutral, bad } = this.state;
//         return (
//         <div className={style.container}>
//             <FeedBackButtons updatedState={this.updatedState}></FeedBackButtons>
//             <FeedBackStat state={this.state}></FeedBackStat>
            
//         </div>
//                         )
//                 }
            


// }

export default FeedBack;


