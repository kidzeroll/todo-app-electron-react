import { useEffect, useState } from "react";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Button from "./components/Button";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { createTodo, deleteTodo, getTodo, updateTodo } from "./utils/Api";

const App = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const [todoId, setTodoId] = useState("");

    useEffect(() => {
        getTodo(setTodo);
    }, []);

    const updateMode = (_id, text) => {
        setIsUpdate(true);
        setText(text);
        setTodoId(_id);
    };

    return (
        <div className="bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400">
            <Header />
            <main className="min-h-screen antialiased leading-relaxed">
                <div className="max-w-6xl mx-auto p-2.5">
                    <div className="my-3 text-2xl text-center capitalize">
                        <Typewriter
                            words={["Todo App from PT Yapindo Jaya Abadi"]}
                            loop="true"
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                        <Cursor cursorStyle="_" cursorColor="#5e7eff" />
                    </div>
                    <div className="flex flex-row mt-1">
                        <input
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            className="w-full px-2 py-1 mr-10 leading-tight bg-transparent border-b appearance-none border-indigo-500/70 focus:border-indigo-500 focus:outline-none"
                            placeholder="Create Todo"
                        />
                        <Button
                            onClick={
                                isUpdate
                                    ? () => updateTodo(todoId, text, setTodo, setText, setIsUpdate)
                                    : () => createTodo(text, setText, setTodo)
                            }>
                            {isUpdate ? "Update" : "Add"}
                        </Button>
                    </div>
                    <div className="gap-4">
                        {todo.map((item) => (
                            <Todo
                                key={item._id}
                                text={item.text}
                                updateMode={() => updateMode(item._id, item.text)}
                                deleteMode={() => deleteTodo(item._id, setTodo)}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
