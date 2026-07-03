import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type User = { id: string; name: string; avatar: string; colorIndex: number };

export type Note = {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  visibility: 'private' | 'module' | 'project';
  updatedAt: string;
};

export type Task = {
  id: string;
  moduleId: string;
  status: 'backlog' | 'progress' | 'review' | 'done';
  title: string;
  desc: string;
  priority: 'low' | 'medium' | 'high';
  assigneeIds: string[];
  due: string;
};

export type ChatMessage = {
  id: string;
  moduleId: string;
  userId: string;
  time: string;
  text: string;
  reactions?: string[];
};

export type Module = {
  id: string;
  projectId: string;
  name: string; // e.g., "Frontend", "Marketing"
  memberIds: string[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
  teamMemberIds: string[];
  progress: number;
};

interface AppState {
  currentUser: User;
  users: User[];
  projects: Project[];
  modules: Module[];
  notes: Note[];
  tasks: Task[];
  messages: ChatMessage[];

  // Actions
  addNote: (note: Omit<Note, 'id' | 'updatedAt'>) => void;
  updateNote: (id: string, content: string) => void;
  moveTask: (taskId: string, status: Task['status']) => void;
  addTask: (task: Omit<Task, 'id'>) => void;
  addMessage: (message: Omit<ChatMessage, 'id' | 'time'>) => void;
  
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const mockUsers: User[] = [
  { id: 'u1', name: 'Alex (you)', avatar: 'A', colorIndex: 0 },
  { id: 'u2', name: 'Sara Chen', avatar: 'S', colorIndex: 1 },
  { id: 'u3', name: 'Mike Torres', avatar: 'M', colorIndex: 2 },
  { id: 'u4', name: 'Jake Park', avatar: 'J', colorIndex: 3 },
  { id: 'u5', name: 'Priya Patel', avatar: 'P', colorIndex: 4 },
];

const mockProjects: Project[] = [
  { id: 'p1', name: 'Marketing Q3', description: 'Quarterly marketing initiatives · July – September 2026', teamMemberIds: ['u1', 'u2', 'u3', 'u4', 'u5'], progress: 68 },
  { id: 'p2', name: 'Vero App V2', description: 'Next generation unified workspace', teamMemberIds: ['u1', 'u4', 'u5'], progress: 34 },
];

const mockModules: Module[] = [
  { id: 'm1', projectId: 'p1', name: 'Social Media', memberIds: ['u1', 'u2', 'u3'] },
  { id: 'm2', projectId: 'p1', name: 'Ads & Campaigns', memberIds: ['u2', 'u4'] },
  { id: 'm3', projectId: 'p2', name: 'Frontend', memberIds: ['u1', 'u4', 'u5'] },
  { id: 'm4', projectId: 'p2', name: 'Backend', memberIds: ['u1', 'u5'] },
];

const mockTasks: Task[] = [
  { id: 't1', moduleId: 'm1', status: 'backlog', title: 'Define retargeting strategy', desc: 'Coordinate with media buying team', priority: 'low', assigneeIds: ['u4'], due: 'Jul 14' },
  { id: 't2', moduleId: 'm1', status: 'progress', title: 'Draft ad copy for Meta', desc: '3 versions needed for A/B test', priority: 'high', assigneeIds: ['u1'], due: 'Today' },
];

const mockMessages: ChatMessage[] = [
  { id: 'msg1', moduleId: 'm1', userId: 'u2', time: '10:02 AM', text: 'Morning everyone! Just finished the first draft of the ad copy.' },
  { id: 'msg2', moduleId: 'm1', userId: 'u3', time: '10:04 AM', text: 'Great timing, I was just about to ask about that!', reactions: ['👀 2'] },
  { id: 'msg3', moduleId: 'm1', userId: 'u1', time: '10:06 AM', text: 'Awesome. Let\'s plan to review together at 1pm?' },
];

const mockNotes: Note[] = [
  { id: 'n1', moduleId: 'm1', title: 'Q3 Campaign Strategy', content: 'The team agreed to prioritize Meta and Google campaigns...', visibility: 'project', updatedAt: '2h ago' }
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentUser: mockUsers[0],
      users: mockUsers,
      projects: mockProjects,
      modules: mockModules,
      notes: mockNotes,
      tasks: mockTasks,
      messages: mockMessages,
      isMobileMenuOpen: false,

      toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

      addNote: (note) => set((state) => ({
        notes: [...state.notes, { ...note, id: Math.random().toString(36).substr(2, 9), updatedAt: 'Just now' }]
      })),
      updateNote: (id, content) => set((state) => ({
        notes: state.notes.map(n => n.id === id ? { ...n, content, updatedAt: 'Just now' } : n)
      })),
      moveTask: (taskId, status) => set((state) => ({
        tasks: state.tasks.map(t => t.id === taskId ? { ...t, status } : t)
      })),
      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, { ...task, id: Math.random().toString(36).substr(2, 9) }]
      })),
      addMessage: (message) => set((state) => ({
        messages: [
          ...state.messages,
          {
            ...message,
            id: Math.random().toString(36).substr(2, 9),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]
      })),
    }),
    {
      name: 'vero-app-storage',
    }
  )
);
