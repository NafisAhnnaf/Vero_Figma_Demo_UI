import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Bold, Italic, Heading1, List, CheckSquare, Image as ImageIcon, Globe, Lock, Users } from "lucide-react";
import { useAppStore } from "../stores/useAppStore";

export default function Notes() {
  const { projectId, moduleId } = useParams();
  const { notes, addNote, updateNote, modules, projects } = useAppStore();
  
  const project = projects.find(p => p.id === projectId);
  const module = modules.find(m => m.id === moduleId);
  
  // Find or create a mock note for this module
  const existingNote = notes.find(n => n.moduleId === moduleId);
  const [content, setContent] = useState(existingNote?.content || "Start typing your notes here...");
  const [visibility, setVisibility] = useState(existingNote?.visibility || "module");

  if (!project || !module) return <div className="p-8 text-foreground">Module not found</div>;

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background">
      {/* Floating toolbar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-border bg-card">
        <div className="flex items-center gap-1 bg-muted rounded-full shadow-sm px-3 py-1.5 border border-border">
          {[Bold, Italic, Heading1, List, CheckSquare, ImageIcon].map((Icon, i) => (
            <button key={i} className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
              <Icon size={13} />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
           <span className="text-xs text-muted-foreground font-medium">Visibility:</span>
           <select 
             value={visibility}
             onChange={(e) => setVisibility(e.target.value as any)}
             className="bg-muted text-xs text-foreground px-3 py-1.5 rounded-lg border border-border outline-none focus:ring-2 focus:ring-primary/20"
           >
             <option value="private">Private</option>
             <option value="module">{module.name} Team</option>
             <option value="project">{project.name} Project</option>
           </select>
        </div>
      </div>

      {/* Document */}
      <div className="flex-1 overflow-auto w-full">
        <div className="max-w-[720px] mx-auto px-10 py-10 pb-32">
          <input 
            type="text" 
            className="text-3xl font-bold text-foreground tracking-tight mb-2 w-full bg-transparent border-none outline-none placeholder:text-muted-foreground"
            defaultValue={existingNote?.title || `${module.name} Notes`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          />
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-teal-400" />
            <p className="text-sm text-muted-foreground">Auto-saved · {existingNote?.updatedAt || "Just now"} · {visibility} access</p>
          </div>

          <textarea 
            className="w-full h-full min-h-[500px] bg-transparent border-none outline-none text-sm text-foreground leading-relaxed resize-none placeholder:text-muted-foreground"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
