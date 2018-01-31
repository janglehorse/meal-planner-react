const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/recipes'}).done(response => {
            this.setState({ employees: response.entity._embedded.recipes });
        })
    }

    render() {
        return (
            <EmpoyeeList employees={ this.state.employees }/>
        )
    }
}

class EmployeeList extends React.Component {
    render() {
        let employees = this.props.recipes.map(recipes =>
            <Recipe key={ recipes._links.self.href } recipe={employee}/>
        )
    }
}