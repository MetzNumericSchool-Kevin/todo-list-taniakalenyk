import { useState, useMemo } from "react";
import TodoItem from "./TodoItem";
import { BarreDeRecherche } from "./BarreDeRecherche"; // Importez le composant

export function TodoApp() {
    const [listToDo, setListToDo] = useState([
        { id: 1, description: 'Apprendre PYTHON', done: false },
        { id: 2, description: 'Apprendre JAVA', done: false },
        { id: 3, description: 'Apprendre JAVA SCRIPT', done: false },
        { id: 4, description: 'Apprendre REACT', done: false },
    ]);

    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setListToDo([...listToDo, { id: listToDo.length + 1, description: newTask, done: false }]);
            setNewTask('');
        }
    }

    const handleToggle = (id: number) => {
        setListToDo(listToDo.map(task => task.id === id ? { ...task, done: !task.done } : task));
    }

    const handleDelete = (id: number) => {
        setListToDo(listToDo.filter(task => task.id !== id));
    }

    const sortedTasks = useMemo(() => {
        return [...listToDo].sort((a, b) => Number(a.done) - Number(b.done));
    }, [listToDo]);

    return (
        <>
            <BarreDeRecherche
                newTask={newTask}
                setNewTask={setNewTask}
                handleAddTask={handleAddTask}
            />

            <div className="my-5 flex-column gap-5 w-full text-left">
                {sortedTasks.map(task => (
                    <TodoItem
                        key={task.id}
                        id={task.id}
                        description={task.description}
                        done={task.done}
                        onToggle={() => handleToggle(task.id)}
                        onDelete={() => handleDelete(task.id)}
                    />
                ))}
            </div>
        </>
    );
}






{/*<div className="my-5 flex-column gap-5 w-full text-left">*/}
            {/*    /!* TODO ITEM version normal *!/*/}
            {/*    <div className="bg-indigo-700 w-full m-5 rounded-box p-3 flex">*/}
            {/*        <span className="pr-8">*/}
            {/*            <input type="checkbox" className="checkbox" />*/}
            {/*        </span>*/}
            {/*        <span className="flex-grow">*/}
            {/*            Aprendre REACT*/}
            {/*        </span>*/}
            {/*        <div>*/}
            {/*            <button className="btn btn-error btn-outline btn-xs">*/}
            {/*                X*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* TODO Item version cochée *!/*/}
            {/*    <div className="bg-indigo-900 w-full m-5 rounded-box p-3 flex">*/}
            {/*        <span className="pr-8">*/}
            {/*            <input type="checkbox" checked={true} className="checkbox" />*/}
            {/*        </span>*/}
            {/*        <span className="flex-grow line-through">*/}
            {/*            Apprendre JAVA*/}
            {/*        </span>*/}
            {/*        <div>*/}
            {/*            <button className="btn btn-error btn-outline btn-xs">*/}
            {/*                X*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="bg-indigo-900 w-full m-5 rounded-box p-3 flex">*/}
            {/*<span className="pr-8">*/}
            {/*    <input*/}
            {/*        type="checkbox"*/}
            {/*        checked={isChecked}*/}
            {/*        onChange={() => setIsChecked(!isChecked)}*/}
            {/*        className="checkbox"*/}
            {/*    />*/}
            {/*</span>*/}
            {/*        <span className={`flex-grow ${isChecked ? 'line-through' : ''}`}>*/}
            {/*    Apprendre PYTHON*/}
            {/*</span>*/}
            {/*        <div>*/}
            {/*            <button className="btn btn-error btn-outline btn-xs">*/}
            {/*                X*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
//         </>
//     )
// }