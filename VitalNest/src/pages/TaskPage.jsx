import React, { useState, useEffect } from "react";
import "../styles/TasksPage.css";

const getItem = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
};

const TasksPage = () => {

  const [tasks, setTasks] = useState(() => {
    return (
      getItem("tasks") || [
        { id: 1, title: "Do Exercises", checked: false },
        { id: 2, title: "Go running", checked: false },
        { id: 3, title: "Eat Healthy Food", checked: false },
      ]
    );
  });
  useEffect(() => {
    setItem("tasks", tasks);
  }, [tasks]);


  const [level, setLevel] = useState(() => getItem("level") || 1);
  useEffect(() => {
    setItem("level", level);
  }, [level]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const completed = tasks.filter((t) => t.checked).length;
  const percent = Math.round((completed / tasks.length) * 100);

  useEffect(() => {
    if (percent === 100) {
      setTimeout(() => {
        setLevel((lvl) => lvl + 1);


        setTasks((prev) => prev.map((task) => ({ ...task, checked: false })));
      }, 600);
    }
  }, [percent]);

  return (
    <div className="task-page">
      <h2 className="mytaskspage">My Tasks</h2>


      <div
        className="progress-track"
      >
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="percent">{percent}%</div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.checked ? "done" : ""}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(task.id)}
            />
            {task.title}
          </li>
        ))}
      </ul>

      <div className="level-box">
        <p>Level: {level}</p>
      </div>
    </div>
  );
};

export default TasksPage;

