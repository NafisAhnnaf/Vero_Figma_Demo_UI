import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Paperclip, Smile, Send } from "lucide-react";
import { AvatarStack, Avatar } from "../components/shared/Avatar";
import { useAppStore } from "../stores/useAppStore";

export default function Chat() {
  const { projectId, moduleId } = useParams();
  const { messages, users, currentUser, addMessage, modules, projects } = useAppStore();
  const [inputText, setInputText] = useState("");

  const project = projects.find(p => p.id === projectId);
  const module = modules.find(m => m.id === moduleId);
  const moduleMessages = messages.filter(m => m.moduleId === moduleId);

  if (!project || !module) return <div className="p-8 text-foreground">Module not found</div>;

  const handleSend = () => {
    if (!inputText.trim()) return;
    addMessage({
      moduleId: module.id,
      userId: currentUser.id,
      text: inputText,
      self: true
    });
    setInputText("");
  };

  return (
    <div className="flex h-full overflow-hidden bg-background">
      {/* Channel sidebar */}
      <div className="w-48 flex flex-col bg-card border-r border-border py-4 px-3 shrink-0">
        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest px-2 mb-2">Channels</p>
        {["# general", "# updates", "# alerts"].map((ch, i) => (
          <button
            key={i}
            className={`text-left text-xs px-2 py-1.5 rounded-lg mb-0.5 ${
              i === 0 ? "bg-accent text-primary font-semibold" : "text-muted-foreground hover:bg-muted"
            }`}
          >
            {ch}
          </button>
        ))}
        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest px-2 mb-2 mt-5">Direct</p>
        {module.memberIds.filter(id => id !== currentUser.id).map((id, i) => {
          const user = users.find(u => u.id === id);
          if (!user) return null;
          return (
            <button key={i} className="flex items-center gap-2 text-left text-xs px-2 py-1.5 rounded-lg mb-0.5 text-muted-foreground hover:bg-muted transition-colors">
              <Avatar initials={user.avatar} colorIndex={user.colorIndex} size="xs" />
              {user.name.split(" ")[0]}
            </button>
          )
        })}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center justify-between px-5 py-3 bg-card/80 backdrop-blur-sm border-b border-border shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-foreground"># general</span>
            <span className="text-border">·</span>
            <span className="text-xs text-muted-foreground">{module.name} Module</span>
          </div>
          <AvatarStack names={module.memberIds.map(id => users.find(u => u.id === id)?.avatar || '')} />
        </div>

        <div className="flex-1 overflow-auto px-5 py-5 flex flex-col gap-3">
          {moduleMessages.map((m, i) => {
            const user = users.find(u => u.id === m.userId);
            if (!user) return null;
            return (
              <div key={m.id} className={`flex gap-3 ${m.self ? "flex-row-reverse" : ""}`}>
                <Avatar initials={user.avatar} colorIndex={user.colorIndex} size="sm" />
                <div className={`max-w-[60%] flex flex-col ${m.self ? "items-end" : "items-start"}`}>
                  <div className={`flex items-baseline gap-2 mb-1 ${m.self ? "flex-row-reverse" : ""}`}>
                    <span className="text-xs font-semibold text-foreground">{user.name}</span>
                    <span className="text-[10px] text-muted-foreground">{m.time}</span>
                  </div>
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                      m.self
                        ? "bg-primary text-primary-foreground rounded-tr-md"
                        : "bg-card text-foreground rounded-tl-md shadow-sm border border-border"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.reactions && (
                    <div className="flex gap-1.5 mt-1.5">
                      {m.reactions.map((r, j) => (
                        <span key={j} className="text-[10px] bg-card border border-border rounded-full px-2 py-0.5 shadow-sm">
                          {r}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Composer */}
        <div className="px-5 pb-5 shrink-0">
          <div className="flex items-center gap-3 bg-card rounded-full px-4 py-3 shadow-sm border border-border focus-within:border-ring/30 focus-within:ring-2 focus-within:ring-ring/20 transition-all">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Paperclip size={16} />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Smile size={16} />
            </button>
            <input 
              type="text" 
              placeholder="Message #general" 
              className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend} className="w-7 h-7 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors">
              <Send size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
