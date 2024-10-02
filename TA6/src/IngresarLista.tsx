import React, { useState } from 'react'

import './App.css'


export default function IngresarLista() {

    const [tasks, setTask] = useState<string[]>(["task1"])


    return (
        <>
            <input id="inputTask" type="text" placeholder="Ingrese la tarea" />
            <button onClick={() => {
                const inputElement = document.getElementById("inputTask") as HTMLInputElement;
                if (inputElement.value !== "") {
                    setTask([...tasks, inputElement.value]);
                    inputElement.value = "";
                }
            }
            }>Enviar</button>
            <h1>Lista de tareas</h1>
            <div>
                <ul>
                    {tasks.map((task) => (
                        <li key={task}>
                            {task}
                            <button onClick={() => {
                                setTask(tasks.filter(t => t !== task));
                            }}>Eliminar</button>
                            <button onClick={() => {
                                const inputElement = document.getElementById("inputTask") as HTMLInputElement;
                                inputElement.value = task;
                                setTask(tasks.filter(t => t !== task));
                            }}>Editar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
