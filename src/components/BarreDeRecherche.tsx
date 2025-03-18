interface Props {
    newTask: string;
    setNewTask: (value: string) => void;
    handleAddTask: () => void;
}

export function BarreDeRecherche({
                                     newTask,
                                     setNewTask,
                                     handleAddTask,
                                 }: Props) {
    return (
        <div className="flex gap-2">
            <label className="input input-bordered flex items-center">
                <input
                    type="text"
                    className="grow"
                    placeholder="Ajouter une tâche"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onFocus={(e) => {
                        if (e.target.value === '') {
                            setNewTask('Apprendre ');
                        }
                    }}
                    onBlur={(e) => {
                        setNewTask(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTask();
                            setNewTask('Apprendre ');
                        }
                    }}
                />
            </label>
            <button
                className="btn btn-primary"
                onClick={handleAddTask}
            >
                +
            </button>
        </div>
    );
}
