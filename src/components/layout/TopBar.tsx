import React from 'react';
import { ChevronDown, Search, Bell, Menu } from "lucide-react";
import { Avatar } from "../shared/Avatar";
import { useAppStore } from "../../stores/useAppStore";

export function TopBar({ workspace = "Personal Workspace" }: { workspace?: string }) {
  const { toggleMobileMenu } = useAppStore();

  return (
    <div className="flex items-center justify-between px-5 py-3 bg-card/80 backdrop-blur-sm border-b border-border shrink-0">
      <div className="flex items-center gap-3">
        <button className="md:hidden text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMobileMenu}>
          <Menu size={18} />
        </button>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors">
          {workspace}
          <ChevronDown size={13} className="text-muted-foreground" />
        </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-muted rounded-full px-3 py-1.5 text-sm text-muted-foreground w-48 border border-transparent focus-within:border-ring/30 focus-within:ring-2 focus-within:ring-ring/20 transition-all">
          <Search size={13} />
          <input 
            type="text" 
            placeholder="Search…" 
            className="bg-transparent border-none outline-none w-full text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell size={17} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[9px] text-primary-foreground flex items-center justify-center font-semibold">
            3
          </span>
        </button>
        <Avatar initials="AK" colorIndex={0} size="sm" />
      </div>
    </div>
  );
}
