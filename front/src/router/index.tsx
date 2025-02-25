import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "../view/components/Header";
import { ChatAi } from '../view/pages/ChatAi';
import { Portifolio } from '../view/pages/Portifolio';
import { About } from '../view/pages/About';
import { Contact } from '../view/pages/Contact';
import { Projects } from '../view/pages/Projects';
import { Todo } from '../view/pages/Todo';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Portifolio />} />
          <Route path="/chat" element={<ChatAi />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/todo" element={<Todo />} />
        </Route>

        <Route />
      </Routes>
    </BrowserRouter>
  );
}
