import React from 'react';
import { useParams } from 'react-router';
import { Mic, Camera, Monitor, PhoneOff, Users, Settings } from "lucide-react";
import { useAppStore } from "../stores/useAppStore";

export default function Meet() {
  const { projectId, moduleId } = useParams();
  const { modules, projects, users } = useAppStore();
  
  const project = projects.find(p => p.id === projectId);
  const module = modules.find(m => m.id === moduleId);

  if (!project || !module) return <div className="p-8 text-foreground">Module not found</div>;

  const activeMembers = module.memberIds.map(id => users.find(u => u.id === id)).filter(Boolean);

  return (
    <div className="flex flex-col h-full bg-background overflow-hidden relative">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-card/80 backdrop-blur-sm absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-rose-500/10 text-rose-500 px-3 py-1.5 rounded-full border border-rose-500/20">
            <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-semibold">Live</span>
          </div>
          <span className="text-sm font-semibold text-foreground">
            {project.name} · {module.name} Sync
          </span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full border border-border">
             <Users size={14} />
             <span>{activeMembers.length} participants</span>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="flex-1 p-6 pt-20 pb-24 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full max-h-[800px]">
          {activeMembers.map((member, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden bg-card border border-border flex items-center justify-center group shadow-sm">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-muted">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/80 to-primary text-white shadow-lg`}>
                  <span className="text-3xl font-bold">{member?.avatar}</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground">{member?.name}</span>
                {i % 3 === 0 && <Mic size={12} className="text-primary" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-card/90 backdrop-blur-lg px-4 py-3 rounded-full shadow-lg border border-border">
        <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-accent transition-colors">
          <Mic size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-accent transition-colors">
          <Camera size={20} />
        </button>
        <button className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-accent transition-colors">
          <Monitor size={20} />
        </button>
        <div className="w-px h-8 bg-border mx-2" />
        <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
          <Settings size={18} />
        </button>
        <div className="w-px h-8 bg-border mx-2" />
        <button className="px-6 h-12 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground font-semibold hover:bg-destructive/90 transition-colors shadow-md shadow-destructive/20 gap-2">
          <PhoneOff size={18} /> Leave
        </button>
      </div>
    </div>
  );
}
