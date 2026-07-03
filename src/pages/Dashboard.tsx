import React from 'react';
import { Video, MessageSquare, FileText, FolderOpen } from "lucide-react";
import { TopBar } from "../components/layout/TopBar";
import { AvatarStack, Avatar } from "../components/shared/Avatar";

export default function Dashboard() {
  return (
    <div className="flex h-full flex-col min-w-0 overflow-hidden">
      <TopBar />
      <div className="flex-1 overflow-auto p-5">
        <div className="mb-5">
          <h2 className="text-xl font-bold text-foreground tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Good morning, Alex ☀️
          </h2>
          <p className="text-sm text-muted-foreground mt-0.5">Thursday, July 3 · Here's what's on your plate today.</p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Today's Meetings */}
          <div className="col-span-12 md:col-span-5 bg-card rounded-2xl shadow-sm border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Today's Meetings</h3>
              <Video size={14} className="text-muted-foreground" />
            </div>
            <div className="flex flex-col divide-y divide-border">
              {[
                { time: "10:00 AM", title: "Q3 Campaign Kickoff", people: ["A", "S", "M", "R"], join: true },
                { time: "1:30 PM", title: "Design System Review", people: ["A", "J", "P"], join: false },
                { time: "4:00 PM", title: "Weekly Team Sync", people: ["A", "S", "M"], join: false },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-muted-foreground w-16 shrink-0 tabular-nums">{m.time}</span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{m.title}</p>
                      <AvatarStack names={m.people} size="xs" />
                    </div>
                  </div>
                  {m.join && (
                    <button className="bg-primary text-primary-foreground text-[11px] px-3 py-1 rounded-full font-semibold hover:bg-primary/90 transition-colors">
                      Join
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Due Tasks */}
          <div className="col-span-12 md:col-span-4 bg-card rounded-2xl shadow-sm border border-border p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">Due Tasks</h3>
              <span className="text-[10px] text-muted-foreground bg-muted px-2 py-0.5 rounded-full">8 open</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { title: "Finalize ad copy for Meta", project: "Marketing Q3", due: "Today", p: "high" },
                { title: "Review brand guidelines deck", project: "Brand", due: "Jul 4", p: "medium" },
                { title: "Update landing page hero", project: "Marketing Q3", due: "Jul 5", p: "low" },
                { title: "Send campaign brief to agency", project: "Marketing Q3", due: "Jul 7", p: "high" },
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div
                    className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      t.p === "high" ? "bg-destructive" : t.p === "medium" ? "bg-amber-400" : "bg-teal-400"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{t.title}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] bg-accent text-primary px-1.5 py-0.5 rounded-full font-medium">
                        {t.project}
                      </span>
                      <span className="text-[10px] text-muted-foreground">{t.due}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat card */}
          <div className="col-span-12 md:col-span-3 bg-card rounded-2xl shadow-sm border border-border p-5 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <p className="text-xs text-muted-foreground">Tasks completed</p>
              <span className="text-[10px] text-teal-600 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded-full font-semibold">↑ 18%</span>
            </div>
            <div>
              <p className="text-5xl font-bold text-foreground tracking-tighter" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                12
              </p>
              <p className="text-xs text-muted-foreground mt-1">this week</p>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[4, 6, 5, 7, 5, 8, 12].map((v, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${i === 6 ? 'bg-primary' : 'bg-muted'}`}
                  style={{ height: `${(v / 12) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
