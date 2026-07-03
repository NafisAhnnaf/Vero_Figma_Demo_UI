import React from 'react';
import { Link } from 'react-router';
import { TopBar } from "../components/layout/TopBar";
import { AvatarStack } from "../components/shared/Avatar";
import { useAppStore } from "../stores/useAppStore";
import { FolderOpen } from "lucide-react";

export default function ProjectHub() {
  const { projects, users } = useAppStore();

  return (
    <div className="flex h-full flex-col min-w-0 bg-background">
      <TopBar workspace="All Projects" />
      <div className="flex-1 overflow-auto p-6">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Projects
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Select a project to view its modules.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <Link key={p.id} to={`/projects/${p.id}`} className="block">
              <div className="bg-card rounded-2xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                      <FolderOpen size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{p.name}</h3>
                      <p className="text-[10px] text-muted-foreground">{p.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <AvatarStack names={p.teamMemberIds.map(id => users.find(u => u.id === id)?.avatar || '')} size="sm" />
                  <div className="flex flex-col items-end gap-1.5 w-24">
                    <span className="text-[10px] font-semibold text-muted-foreground">{p.progress}%</span>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${p.progress}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
