const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = { recipes: [] };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/recipes' }).done(response => {
            this.setState({ recipes: response.entity._embedded.recipes });
        })
    }

    render() {
        return (
            <RecipeList recipes={ this.state.recipes }/>
        )
    }
}

class RecipeList extends React.Component {
    render() {
        let recipes = this.props.recipes.map(recipes =>
            <Recipe key={ recipes._links.self.href } recipe={ recipe }/>
        );
        return (
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                        { recipes }
                    </tbody>
                </table>
        )
    }
}

class Recipe extends React.Component {
    render() {
        return (
            <tr>
                <td>{ this.props.recipe.name }</td>
                <td>{ this.props.description }</td>
            </tr>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
);