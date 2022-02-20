import Buttons from "./Buttons";
import Form from "./Form";
import List from "./List";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    { id: 1, content: "dwa", done: false },
    { id: 2, content: "tezy", done: true },
];

const hideDoneTasks = false;

function App() {
    return (
        <Container>
            <Header
                title="Lista zadań"
            />

            <Section
                header="Dodaj nowe zadanie"
                body={<Form />}
            />

            <Section
                header="Lista zadań"
                body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
            />

        </Container>
    );
}

export default App;
