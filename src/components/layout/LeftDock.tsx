import React from 'react';
import { Home, FolderOpen, MessageSquare, FileText, Video, Settings, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Avatar, VeroLogo } from "../shared/Avatar";
import { useTheme } from "../../context/ThemeContext";
import { useAppStore } from "../../stores/useAppStore";
import { motion, AnimatePresence } from "framer-motion";

export function LeftDock() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isMobileMenuOpen, toggleMobileMenu } = useAppStore();
  
  const path = location.pathname;
  const active = path === '/' ? 'home' : path.substring(1);

  const items = [
    { id: "home", icon: Home, to: "/" },
    { id: "projects", icon: FolderOpen, to: "/projects" },
  ];

  const DockContent = () => (
    <div className="flex flex-col items-center gap-2 py-4 px-2.5 bg-card rounded-2xl shadow-sm border border-border m-3 self-start shrink-0 h-[calc(100vh-24px)] md:h-auto z-50">
      <div className="flex flex-col items-center gap-2 w-full">
        {/* Mobile Close Button */}
        <button 
          className="md:hidden self-end mb-2 text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          <X size={18} />
        </button>

        <Link to="/" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
          <VeroLogo size="md" />
        </Link>
        <div className="w-5 h-px bg-border my-1" />
        
        {items.map(({ id, icon: Icon, to }) => (
          <Link
            key={id}
            to={to}
            onClick={() => isMobileMenuOpen && toggleMobileMenu()}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              active === id || (id === 'projects' && path.startsWith('/projects'))
                ? "bg-accent text-primary" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Icon size={16} />
          </Link>
        ))}
      </div>

      <div className="flex-1 min-h-4" />
      
      <button 
        onClick={toggleTheme}
        className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors"
      >
        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
      </button>

      <button className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted mt-1">
        <Settings size={15} />
      </button>
      <div className="mt-2">
        <Avatar initials="AK" colorIndex={0} size="sm" />
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Dock */}
      <div className="hidden md:flex">
        <DockContent />
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="md:hidden fixed top-0 left-0 bottom-0 z-50 flex"
            >
              <DockContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
