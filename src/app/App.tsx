import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import ProjectHub from '../pages/ProjectHub';
import ModuleHub from '../pages/ModuleHub';
import Kanban from '../pages/Kanban';
import Chat from '../pages/Chat';
import Notes from '../pages/Notes';
import Meet from '../pages/Meet';
import SignIn from '../pages/SignIn';
import { ThemeProvider } from '../context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            
            <Route path="projects">
              <Route index element={<ProjectHub />} />
              <Route path=":projectId" element={<ModuleHub />} />
              <Route path=":projectId/modules/:moduleId/kanban" element={<Kanban />} />
              <Route path=":projectId/modules/:moduleId/chat" element={<Chat />} />
              <Route path=":projectId/modules/:moduleId/notes" element={<Notes />} />
              <Route path=":projectId/modules/:moduleId/meet" element={<Meet />} />
            </Route>

            <Route path="chat" element={<Navigate to="/projects" replace />} />
            <Route path="notes" element={<Navigate to="/projects" replace />} />
            <Route path="meet" element={<Navigate to="/projects" replace />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
