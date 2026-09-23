"use client";

import Link from "next/link";
import {
  ArrowUpDown,
  BarChart3,
  Bell,
  Bot,
  CalendarClock,
  LayoutDashboard,
  Phone,
  Plus,
  Search,
  Settings,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

const leads = [
  { name: "Rahul Sharma", company: "TechFlow", email: "rahul@techflow.io", phone: "+91 98765 43210", source: "Website", score: 89, status: "Hot", lastContact: "Today, 10:42 AM" },
  { name: "Priya Singh", company: "Nova Labs", email: "priya@novalabs.co", phone: "+91 99887 66554", source: "Referral", score: 84, status: "Hot", lastContact: "Today, 09:18 AM" },
  { name: "Aman Gupta", company: "GrowthX", email: "aman@growthx.com", phone: "+91 91234 56789", source: "LinkedIn", score: 81, status: "Hot", lastContact: "Yesterday, 04:30 PM" },
  { name: "Sneha Kapoor", company: "PixelWorks", email: "sneha@pixelworks.in", phone: "+91 97654 32109", source: "Website", score: 76, status: "Warm", lastContact: "Yesterday, 02:12 PM" },
  { name: "Vikram Mehta", company: "Orbit Systems", email: "vikram@orbitsystems.com", phone: "+91 90909 87654", source: "Campaign", score: 62, status: "Warm", lastContact: "Aug 26, 11:05 AM" },
  { name: "Neha Joshi", company: "BrightPath", email: "neha@brightpath.org", phone: "+91 93456 78901", source: "Website", score: 38, status: "Cold", lastContact: "Aug 24, 03:48 PM" },
];

const navItems = [
  [LayoutDashboard, "Dashboard", "/"],
  [Users, "Leads", "/leads"],
  [Phone, "Calls", "/calls"],
  [CalendarClock, "Callbacks", "/callbacks"],
  [BarChart3, "Analytics", "/analytics"],
  [Bot, "AI Agent", "/ai-agent"],
] as const;

export default function LeadsPage() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All leads");

  const filteredLeads = useMemo(() => leads.filter((lead) => {
    const matchesQuery = `${lead.name} ${lead.company} ${lead.email}`.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = status === "All leads" || lead.status === status;
    return matchesQuery && matchesStatus;
  }), [query, status]);

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-gray-900">
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-gray-200 bg-white px-5 py-6 lg:block">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black font-bold text-white">E</div>
          <div><h1 className="text-lg font-bold">Elevate AI</h1><p className="text-xs text-gray-400">AI Sales Agent</p></div>
        </div>
        <nav className="space-y-2">
          {navItems.map(([Icon, label, href]) => <Link key={label} href={href} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${label === "Leads" ? "bg-black text-white" : "text-gray-500 hover:bg-gray-100 hover:text-black"}`}><Icon size={19} />{label}</Link>)}
        </nav>
        <div className="absolute bottom-6 left-5 right-5"><Link href="/settings" className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black"><Settings size={19} />Settings</Link></div>
      </aside>

      <main className="lg:ml-64">
        <header className="flex min-h-20 items-center justify-between border-b border-gray-200 bg-white px-5 py-4 sm:px-8">
          <div><h2 className="text-xl font-semibold">Leads</h2><p className="text-sm text-gray-400">Manage and qualify your sales pipeline</p></div>
          <div className="flex items-center gap-4 sm:gap-5"><button aria-label="Notifications" className="relative"><Bell size={20} /><span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" /></button><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-medium text-white">M</div><div className="hidden md:block"><p className="text-sm font-medium">Mandavi</p><p className="text-xs text-gray-400">Admin</p></div></div></div>
        </header>

        <section className="p-5 sm:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">Pipeline</p><h1 className="text-3xl font-bold">All leads</h1><p className="mt-2 text-gray-500">Track every prospect from first contact to close.</p></div><button className="flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"><Plus size={17} />Add lead</button></div>

          <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4"><Summary label="Total leads" value="250" detail="+12.5%" /><Summary label="Hot leads" value="32" detail="+18.4%" /><Summary label="Needs follow-up" value="18" detail="Today" /><Summary label="Conversion rate" value="24.8%" detail="+4.2%" /></div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div><h2 className="text-lg font-semibold">Lead directory</h2><p className="text-sm text-gray-400">{filteredLeads.length} of {leads.length} sample leads shown</p></div><div className="flex flex-col gap-3 sm:flex-row"><label className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2"><Search size={17} className="text-gray-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search leads..." className="w-full bg-transparent text-sm outline-none sm:w-44" /></label><select value={status} onChange={(event) => setStatus(event.target.value)} className="rounded-xl border-0 bg-gray-100 px-3 py-2 text-sm outline-none"><option>All leads</option><option>Hot</option><option>Warm</option><option>Cold</option></select><button aria-label="More filters" className="hidden items-center justify-center rounded-xl bg-gray-100 px-3 text-gray-500 sm:flex"><SlidersHorizontal size={17} /></button></div></div>
            <div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left"><thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-400"><tr><th className="px-6 py-4 font-medium">Lead</th><th className="px-4 py-4 font-medium">Contact</th><th className="px-4 py-4 font-medium">Source</th><th className="px-4 py-4 font-medium"><span className="inline-flex items-center gap-1">Score <ArrowUpDown size={13} /></span></th><th className="px-4 py-4 font-medium">Status</th><th className="px-6 py-4 font-medium">Last contact</th></tr></thead><tbody className="divide-y divide-gray-100">{filteredLeads.map((lead) => <tr key={lead.email} className="transition hover:bg-gray-50"><td className="px-6 py-4"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-semibold">{lead.name.charAt(0)}</div><div><p className="font-medium">{lead.name}</p><p className="text-sm text-gray-400">{lead.company}</p></div></div></td><td className="px-4 py-4"><p className="text-sm">{lead.email}</p><p className="text-sm text-gray-400">{lead.phone}</p></td><td className="px-4 py-4 text-sm text-gray-500">{lead.source}</td><td className="px-4 py-4"><span className="font-semibold">{lead.score}</span><span className="text-gray-400">/100</span></td><td className="px-4 py-4"><StatusBadge status={lead.status} /></td><td className="px-6 py-4 text-sm text-gray-500">{lead.lastContact}</td></tr>)}{filteredLeads.length === 0 && <tr><td colSpan={6} className="px-6 py-12 text-center text-sm text-gray-500">No leads match your search.</td></tr>}</tbody></table></div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Summary({ label, value, detail }: { label: string; value: string; detail: string }) { return <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5"><p className="text-xs text-gray-500 sm:text-sm">{label}</p><div className="mt-3 flex items-end justify-between gap-2"><p className="text-2xl font-bold sm:text-3xl">{value}</p><span className="text-xs font-medium text-green-600">{detail}</span></div></div>; }

function StatusBadge({ status }: { status: string }) { const colors = { Hot: "bg-red-50 text-red-600", Warm: "bg-yellow-50 text-yellow-600", Cold: "bg-gray-100 text-gray-500" }; return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[status as keyof typeof colors]}`}>{status}</span>; }