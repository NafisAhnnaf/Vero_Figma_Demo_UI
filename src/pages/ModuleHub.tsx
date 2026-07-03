import React from 'react';
import { useParams, Link } from 'react-router';
import { TopBar } from "../components/layout/TopBar";
import { AvatarStack } from "../components/shared/Avatar";
import { useAppStore } from "../stores/useAppStore";
import { LayoutGrid, MessageSquare, FileText, Video } from "lucide-react";

export default function ModuleHub() {
  const { projectId } = useParams();
  const { projects, modules, users } = useAppStore();
  
  const project = projects.find(p => p.id === projectId);
  const projectModules = modules.filter(m => m.projectId === projectId);

  if (!project) return <div className="p-8 text-foreground">Project not found</div>;

  const features = [
    { id: "kanban", icon: LayoutGrid, label: "Board" },
    { id: "chat", icon: MessageSquare, label: "Chat" },
    { id: "notes", icon: FileText, label: "Notes" },
    { id: "meet", icon: Video, label: "Meet" },
  ];

  return (
    <div className="flex h-full flex-col min-w-0 bg-background">
      <TopBar workspace={project.name} />
      <div className="flex-1 overflow-auto p-6">
        <div className="flex items-start justify-between mb-7">
          <div>
            <h2 className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {project.name} Modules
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Select a module to access its features.</p>
          </div>
          <div className="flex items-center gap-3">
            <AvatarStack names={project.teamMemberIds.map(id => users.find(u => u.id === id)?.avatar || '')} />
            <button className="text-primary text-sm px-4 py-1.5 rounded-full font-semibold border border-ring/30 hover:bg-accent transition-colors">
              Manage Team
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {projectModules.map((m) => (
            <div key={m.id} className="bg-card rounded-2xl p-5 shadow-sm border border-border flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">Module Members:</span>
                    <AvatarStack size="xs" names={m.memberIds.map(id => users.find(u => u.id === id)?.avatar || '')} />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                {features.map((f) => {
                  const Icon = f.icon;
                  return (
                    <Link
                      key={f.id}
                      to={`/projects/${project.id}/modules/${m.id}/${f.id}`}
                      className="flex flex-col items-center gap-2.5 p-4 rounded-xl cursor-pointer transition-all w-28 bg-background border border-border hover:border-primary/40 hover:shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <span className="text-[11px] font-semibold text-foreground">
                        {f.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
