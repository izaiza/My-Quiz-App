import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import styles from './style.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            questions:[
                ["3 and 3","6"],
                ["1 and 3","4"],
                ["2 and 3","5"],
                ["4 and 3","7"],
                ["5 and 3","8"],
                ["6 and 3","9"],
                ["7 and 3","10"],
                ["9 and 3","12"],
                ["9 and 4","13"],
                ["8 and 2","10"]
            ],
            counter: 0,
        };

        this.Count = this.Count.bind(this);
    }


    Count() {
        var newCounter = this.state.counter + 1;
        this.setState({counter:newCounter})
    }
    render (){
        return (
            <div>
                <h1>This is my very basic Quiz App</h1>
                <div className="correct-answers-container">
                <span className="correct-answers">Correct answers: {this.state.counter} / {this.state.questions.length}</span>
                </div>
                <ShowHint />

                {this.state.questions.map((q,index)=> {
                    const counter = index+1;
                    return <Quiz Count = {this.Count}
                                 counter={this.state.counter}
                                 question={'What is a sum of '+this.state.questions[index][0]+'?'}
                                 answer={this.state.questions[index][1]}/>
                })}
                <div class="play-again-container">
                <a href="http://localhost:8080/" class="play-again">PLAY AGAIN</a>
                </div>
            </div>
        )
    }
}

class ShowHint extends Component {
    showHint() {
        window.open("https://calc.pl/matematyka/matematyczny", "_blank");
    }

    render() {
        return <div class="need-help-container">
            <button onClick={this.showHint} className="help">Help yourself &#127808;</button>
            </div>
    }
}

class Animation extends Component {
    render(){
        return(
            this.props.message
        )
    }
}

class IsMessageRight extends Component {
    render(){
        return (
            <div>{this.props.response}</div>
        )
    }

}

class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userAnswer: '',
            isDisabled: '',
            className: 'init',
            buttonValue: 'Am I right?',
            hint: "https://calc.pl/matematyka/matematyczny",
            showSth: '',
            backgroundColor: ''
        };
        this.checkAnswer = this.checkAnswer.bind(this);
        this.typeAnswer = this.typeAnswer.bind(this);
    }
    typeAnswer(e) {
        this.setState({userAnswer:e.target.value});
    }
    checkAnswer (e) {
        e.preventDefault();
        var isCorrect = this.state.userAnswer === this.props.answer;
        if (isCorrect) {
            this.props.Count();
            this.setState({isDisabled:"disabled"});
            this.setState({buttonValue:"Yes!"});
            this.setState({showSth:"WOW"});
            this.setState({backgroundColor: 'green'})
        } else {
            this.setState({userAnswer:"Wrong answer"});
            this.setState({buttonValue:"No"});
            this.setState({isDisabled:"disabled"});
        }
    }
    render (){
        return (
            <form onSubmit={this.checkAnswer} className="class-added">
                <div className="form-group">
                    <label htmlFor={"questions"} >{this.props.question} <br/>
                        <input name="questions"
                               className={classNames(this.state.className)}
                               value={this.state.userAnswer}
                               onChange={this.typeAnswer}
                               disabled = {(this.state.isDisabled)? "disabled" : ""}/>
                    </label>
                <input className="submit-input" type="submit" value={this.state.buttonValue} disabled = {(this.state.isDisabled)? "disabled" : ""} />
                </div>
            </form>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);