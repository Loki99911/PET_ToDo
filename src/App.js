import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";
import { CalendarPage } from "./pages/CalendarPage/CalendarPage";

import { TodoPage } from "./pages/TodoPage/TodoPage";
import { MeetingsPage } from "./pages/MeetingsPage/MeetingsPage";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { BirthdaysPage } from "./pages/BirthdaysPage/BirthdaysPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/birthdays" element={<BirthdaysPage />} />
      </Route>
    </Routes>
  );
}

export default App;
