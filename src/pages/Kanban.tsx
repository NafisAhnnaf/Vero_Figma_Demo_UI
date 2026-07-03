import React from 'react';
import { useParams } from 'react-router';
import { Plus, Filter, Check } from "lucide-react";
import { AvatarStack } from "../components/shared/Avatar";
import { useAppStore } from "../stores/useAppStore";

export default function Kanban() {
  const { projectId, moduleId } = useParams();
  const { tasks, modules, projects, users } = useAppStore();

  const project = projects.find(p => p.id === projectId);
  const module = modules.find(m => m.id === moduleId);
  const moduleTasks = tasks.filter(t => t.moduleId === moduleId);

  if (!project || !module) return <div className="p-8 text-foreground">Module not found</div>;

  const columns = [
    { id: 'backlog', label: 'Backlog', tasks: moduleTasks.filter(t => t.status === 'backlog') },
    { id: 'progress', label: 'In Progress', tasks: moduleTasks.filter(t => t.status === 'progress') },
    { id: 'review', label: 'In Review', tasks: moduleTasks.filter(t => t.status === 'review') },
    { id: 'done', label: 'Done', tasks: moduleTasks.filter(t => t.status === 'done') },
  ];

  const chipStyle = (p: string): string => {
    if (p === "high") return "bg-rose-50 text-rose-500 dark:bg-rose-950/50";
    if (p === "medium") return "bg-amber-50 text-amber-500 dark:bg-amber-950/50";
    return "bg-teal-50 text-teal-600 dark:bg-teal-950/50";
  };

  return (
    <div className="flex h-full flex-col min-w-0 overflow-hidden bg-background">
      <div className="flex items-center justify-between px-5 py-3 bg-card/80 backdrop-blur-sm border-b border-border shrink-0">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">{project.name}</span>
          <span className="text-border">/</span>
          <span className="text-muted-foreground">{module.name}</span>
          <span className="text-border">/</span>
          <span className="font-semibold text-foreground">Board</span>
          <div className="flex items-center gap-1.5 ml-3">
            <button className="flex items-center gap-1 bg-muted text-muted-foreground text-[11px] px-2.5 py-1 rounded-full hover:bg-accent transition-colors">
              <Filter size={10} /> Assignee
            </button>
            <button className="flex items-center gap-1 bg-muted text-muted-foreground text-[11px] px-2.5 py-1 rounded-full hover:bg-accent transition-colors">
              <Filter size={10} /> Priority
            </button>
          </div>
        </div>
        <button className="flex items-center gap-1.5 bg-primary text-primary-foreground text-sm px-4 py-1.5 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-sm">
          <Plus size={13} /> New Task
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="flex gap-4 p-5 h-full min-w-max">
          {columns.map((col) => (
            <div key={col.id} className="w-72 flex flex-col shrink-0">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-foreground uppercase tracking-wider">{col.label}</span>
                  <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{col.tasks.length}</span>
                </div>
                <button className="text-muted-foreground hover:text-foreground transition-colors bg-muted rounded-md p-1">
                  <Plus size={14} />
                </button>
              </div>

              <div className="flex flex-col gap-2.5 bg-muted/50 rounded-2xl p-3 flex-1 border border-border">
                {col.tasks.map((task) => (
                  <div key={task.id}>
                    <div
                      className={`bg-card rounded-xl p-3.5 shadow-sm border border-border transition-all hover:shadow-md cursor-grab active:cursor-grabbing ${task.status === 'done' ? "opacity-60" : ""}`}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full capitalize border border-border/50 ${chipStyle(task.priority)}`}>
                          {task.priority}
                        </span>
                        {task.status === 'done' && <Check size={12} className="text-teal-500" />}
                      </div>
                      <p className={`text-sm font-semibold text-foreground mb-1.5 leading-snug ${task.status === 'done' ? "line-through opacity-70" : ""}`}>
                        {task.title}
                      </p>
                      <p className="text-[11px] text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{task.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full border border-border font-medium">{task.due}</span>
                        <AvatarStack names={task.assigneeIds.map(id => users.find(u => u.id === id)?.avatar || '')} size="xs" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
