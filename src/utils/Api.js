import axios from "axios";

const baseUrl = "http://localhost:5000/api/todo";

export const getTodo = (setTodo) => {
    axios.get(baseUrl).then(({ data }) => {
        console.log(data);
        setTodo(data);
    });
};

export const createTodo = (text, setText, setTodo) => {
    axios
        .post(`${baseUrl}/create`, { text })
        .then(({ data }) => {
            console.log(data);
            setText("");
            getTodo(setTodo);
        })
        .catch((err) => console.log(err));
};

export const updateTodo = (todoId, text, setTodo, setText, setIsUpdate) => {
    axios
        .put(`${baseUrl}/update`, { _id: todoId, text })
        .then(({ data }) => {
            console.log(data);
            setText("");
            setIsUpdate(false);
            getTodo(setTodo);
        })
        .catch((err) => console.log(err));
};

export const deleteTodo = (_id, setTodo) => {
    axios
        .post(`${baseUrl}/delete`, { _id })
        .then(({ data }) => {
            console.log(data);
            getTodo(setTodo);
        })
        .catch((err) => console.log(err));
};
