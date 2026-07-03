import React from 'react';
import { Outlet } from 'react-router';
import { LeftDock } from './LeftDock';

export default function Layout() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background font-sans text-foreground">
      <LeftDock />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <Outlet />
      </div>
    </div>
  );
}
