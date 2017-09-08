
class TodoApp extends React.Component {
    state = { items: [] }

    addTodo = (name) => {
        let {items} = this.state;
        this.setState({ items: [name, ...items] })
    }

    render() {
        return {
            <div>
                <TodoForm addTodoItem = {this.addTodo} />
                <List items = {this.state.items} />
            </div>
        }
    }
}