import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Css.css';
// import App from './App.tsx';
// import TodoList from './components/TodoList.tsx';
// import SubjectList from "./components/SubjectList";
// import SubjectItem from "./components/SubjectItem";
// import TodoListHookForm from './components/TodoListHookFrom.tsx';
import ParliamentMembers from './components/ParliamentMembers.tsx';


const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <ParliamentMembers />
    {/*
      <TodoListHookForm />
      <App />
      <TodoList />
      <SubjectList />
      <SubjectItem name="ตัวอย่างวิชา" grade="A" onRemove={() => {}} />
    */}
  </StrictMode>
);
