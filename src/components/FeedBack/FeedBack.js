import React, { Component } from 'react';
import style from './FeedBack.module.css'
 

class FeedBack extends Component{

    state = {
    good: 0,
    neutral: 0,
    bad: 0
    }


    


    render() {
        return (
            <div className={style.container}>
                <h2>please leave feedback</h2>
                <button>good</button>
                <button>neutral</button>
                <button>bad</button>
            
                <h3>statistics</h3>
                <p>good</p>
                <p>neutral</p>
                <p>bad</p>
            </div>
          )
      }

}

export default FeedBack;


    

