import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            q:[
                ["3 and 3","6"],
                ["1 and 3","6"],
                ["2 and 3","6"],
                ["4 and 3","6"],
                ["5 and 3","6"],
                ["6 and 3","6"],
                ["7 and 3","6"],
                ["9 and 3","6"],
                ["9 and 3","6"],
                ["20 and 3","23"]
            ],
            counter: 0,
        };

        this.incrementCounter = this.incrementCounter.bind(this);
    }


    incrementCounter() {
        var newCounter = this.state.counter + 1;
        this.setState({counter:newCounter})
    }
    render (){
        return (
            <div>
            <h1>This is my very basic Quiz App</h1>

        <span>Correct answers: {this.state.counter} / {this.state.q.length}</span> <br/> <br/>
        <ShowHint />

        {this.state.q.map((qa,index)=> {
            const counter = index+1;
            return <Quiz incrementCounter = {this.incrementCounter}
            counter={this.state.counter}
            question={counter+". What is the sum of "+this.state.q[index][0]+"?"}
            answer={this.state.q[index][1]}/>
        })}
    <a href="http://localhost:8080/" class="play-again">Play again</a>
        </div>
    )
    }
}

class ShowHint extends Component {
    showHint() {
        window.open("https://codepen.io/sandradudley/pen/XMRvaE", "_blank");
    }

    render() {
        return <button onClick={this.showHint}>Help yourself &#127808;</button>;
    }
}

class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userAnswer: "",
            isDisabled: "",
            className: "normal",
            buttonValue: "Am I right?",
            hint: "https://codepen.io/sandradudley/pen/XMRvaE"
        }
        this.checkAnswer = this.checkAnswer.bind(this);
        this.typeAnswer = this.typeAnswer.bind(this);
    }
    typeAnswer(e) {
        this.setState({userAnswer:e.target.value});
    }
    checkAnswer (e) {
        e.preventDefault();
        var isCorrect = this.state.userAnswer.toLowerCase().trim() === this.props.answer.toLowerCase().trim() ? true : false;
        if (isCorrect) {
            this.props.incrementCounter();
            this.setState({isDisabled:"disabled"});
            //this.setState({className:"correct animated rubberBand"});
            this.setState({buttonValue:"Yes, you happen to be right!"});
        } else {
            //this.setState({className:"incorrect animated shake"});
            this.setState({userAnswer:"Try again"});
        }
    }
    render (){
        return (
            <form onSubmit={this.checkAnswer} className="set">
            <div className="form-group">
            <label htmlFor={"q"} >{this.props.question} <br/>
        <input name="q"
        className={classNames(this.state.className)}
        value={this.state.userAnswer}
        onChange={this.typeAnswer}
        disabled = {(this.state.isDisabled)? "disabled" : ""}/>
        </label>
        </div>
        <input type="submit"
        value={this.state.buttonValue}
        disabled = {(this.state.isDisabled)? "disabled" : ""} />
        </form>

    );
    }
}
ReactDOM.render(
<App />,
    document.getElementById('app')
);
