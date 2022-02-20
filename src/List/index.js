import "./style.css";

const List = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}
                className={`list__item ${task.done && props.hideDoneTasks ? " list__item--hidden" : ""} ">`}
            >
                <button className="list__button list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <p className={`list__content {task.done ? " list__content--done" : ""}`}>
                    {task.content}
                </p>
                <button className="list__button list__button--remove">🗑
                </button>
            </li>
        ))}
    </ul >
);

export default List;