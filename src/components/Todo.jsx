import { HiPencilAlt, HiTrash } from "react-icons/hi";

const Todo = ({ text, updateMode, deleteMode }) => {
    return (
        <div className="flex flex-row items-center justify-between w-full bg-slate-900/70 dark:bg-white/70 text-white dark:text-black rounded-lg justify-items-center p-2.5 mt-5">
            <div className="text">{text}</div>
            <div className="flex">
                <div className="flex text-sm font-medium bg-transparent rounded-lg outline-none hover:bg-slate-900/5 dark:hover:bg-slate-100/5 hover:text-indigo-500 py-1 px-1.5 md:py-2 md:px-4 cursor-pointer">
                    <HiPencilAlt className="w-5 h-5 " onClick={updateMode} />
                </div>
                <div className="flex text-sm font-medium bg-transparent rounded-lg outline-none hover:bg-slate-900/5 dark:hover:bg-slate-100/5 hover:text-indigo-500 py-1 px-1.5 md:py-2 md:px-4 cursor-pointer">
                    <HiTrash className="w-5 h-5" onClick={deleteMode} />
                </div>
            </div>
        </div>
    );
};

export default Todo;
