import React from 'react'
import Rules from "./Rules";

class RulesContainer extends React.Component {

    render() {
        const rulesData = this.props.rules
        return (
            <div>
                <div>
                   <div>{rulesData.map((r) => <div key={r.id}>{r.rule}</div>)}</div>
                </div>
                <Rules rule='Do not be an asshole'/>
                <span><button onClick={() => alert('You got it!')}>I accept it</button></span>
            </div>

        )
    }
}

export default RulesContainer


