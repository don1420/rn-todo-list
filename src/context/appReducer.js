import * as constants from "../constants";

const handlers = {
    [constants.ADD_TODO_ITEM]: (state, { label, id }) => ({
        ...state,
        todos: [
            ...state.todos,
            {
                id,
                label,
                isCompleted: false,
                isImportant: false,
                isVisible: true
            }
        ]
    }),
    [constants.REMOVE_TODO_ITEM]: (state, { id }) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== id)
    }),
    [constants.MARK_AS_IMPORTANT]: (state, { id }) => ({
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === id) {
                todo.isImportant = !todo.isImportant
            }
            return todo
        })
    }),
    [constants.MARK_AS_DONE]: (state, { id }) => ({
        ...state,
        todos: state.todos.map(todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted
            }
            return todo
        })
    }),
    [constants.FILTER_CONDITION]: (state, { filterCondition }) => ({
        ...state,
        filterCondition: filterCondition
    }),
    [constants.SEARCH_TERM]: (state, { term }) => ({
        ...state,
        todos: state.todos.map(todo => {
            if (todo.label.indexOf(term) === -1) {
                todo.isVisible = false;
            } else {
                todo.isVisible = true;
            }

            return todo;
        })
    }),
    DEFAULT: state => state
}

export const appReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}