"use client";

import {
  LayoutDashboard,
  Users,
  Phone,
  CalendarClock,
  BarChart3,
  Bot,
  Settings,
  Search,
  Bell,
  Flame,
  PhoneCall,
  Clock3,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const leads = [
  {
    name: "Rahul Sharma",
    company: "TechFlow",
    score: 89,
    status: "HOT",
  },
  {
    name: "Priya Singh",
    company: "Nova Labs",
    score: 84,
    status: "HOT",
  },
  {
    name: "Aman Gupta",
    company: "GrowthX",
    score: 81,
    status: "HOT",
  },
  {
    name: "Sneha Kapoor",
    company: "PixelWorks",
    score: 76,
    status: "WARM",
  },
];

const calls = [
  {
    name: "Rahul Sharma",
    duration: "04:32",
    result: "Hot Lead",
  },
  {
    name: "Priya Singh",
    duration: "02:18",
    result: "Callback",
  },
  {
    name: "Aman Gupta",
    duration: "05:41",
    result: "Interested",
  },
  {
    name: "Sneha Kapoor",
    duration: "03:12",
    result: "Warm Lead",
  },
];

export default function Dashboard() {
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileDetailsOpen, setProfileDetailsOpen] = useState(false);
  const [editingProfile, setEditingProfile] = useState(false);
  const [companyDetailsOpen, setCompanyDetailsOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "Mandavi Bansal",
    email: "mandavi@elevate.ai",
    phone: "+91 98765 43210",
    role: "Admin",
  });
  const [company, setCompany] = useState({
    name: "Elevate AI",
    website: "https://elevate.ai",
    industry: "Sales technology",
    description: "AI-powered tools that help sales teams qualify leads and grow pipeline faster.",
    customers: "Growing startups and modern sales teams",
    location: "Bengaluru, India",
  });

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-gray-900">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 px-5 py-6">

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-bold">
            E
          </div>

          <div>
            <h1 className="text-lg font-bold">Elevate AI</h1>
            <p className="text-xs text-gray-400">AI Sales Agent</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-2">

          <NavItem
            icon={<LayoutDashboard size={19} />}
            label="Dashboard"
            href="/"
            active
          />

          <NavItem
            icon={<Users size={19} />}
            label="Leads"
            href="/leads"
          />

          <NavItem
            icon={<Phone size={19} />}
            label="Calls"
            href="/calls"
          />

          <NavItem
            icon={<CalendarClock size={19} />}
            label="Callbacks"
            href="/callbacks"
          />

          <NavItem
            icon={<BarChart3 size={19} />}
            label="Analytics"
            href="/analytics"
          />

          <NavItem
            icon={<Bot size={19} />}
            label="AI Agent"
            href="/ai-agent"
          />

        </nav>

        {/* BOTTOM NAV */}
        <div className="absolute bottom-6 left-5 right-5">

          <NavItem
            icon={<Settings size={19} />}
            label="Settings"
            href="/settings"
          />

        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-64">

        {/* HEADER */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8">

          <div>
            <h2 className="text-xl font-semibold">
              Dashboard
            </h2>

            <p className="text-sm text-gray-400">
              Monitor your AI sales activity
            </p>
          </div>

          <div className="flex items-center gap-5">

            {/* SEARCH */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl">
              <Search size={17} className="text-gray-400" />

              <input
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-32"
              />
            </div>

            {/* NOTIFICATION */}
            <button className="relative">
              <Bell size={20} />

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* PROFILE */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={profileOpen}
                aria-haspopup="menu"
                aria-label="Open profile menu"
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 rounded-xl p-1.5 transition hover:bg-gray-100"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-sm font-medium text-white">
                  M
                </div>

                <div className="hidden text-left md:block">
                  <p className="text-sm font-medium">Mandavi Bansal</p>
                  <p className="text-xs text-gray-400">Admin</p>
                </div>
              </button>

              {profileOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-14 z-20 w-64 overflow-hidden rounded-2xl border border-gray-200 bg-white py-2 shadow-lg"
                >
                  <div className="border-b border-gray-100 px-4 py-3">
                    <p className="text-sm font-semibold">Mandavi Bansal</p>
                    <p className="mt-1 text-xs text-gray-400">Admin</p>
                  </div>

                  <div className="p-2">
                    <ProfileMenuItem
                      label="My profile"
                      onClick={() => {
                        setProfileOpen(false);
                        setEditingProfile(false);
                        setProfileDetailsOpen(true);
                      }}
                    />
                    <ProfileMenuItem
                      label="Company"
                      onClick={() => {
                        setProfileOpen(false);
                        setEditingCompany(false);
                        setCompanyDetailsOpen(true);
                      }}
                    />
                    <ProfileMenuItem
                      label="Settings"
                      onClick={() => {
                        setProfileOpen(false);
                        router.push("/settings");
                      }}
                    />
                    <ProfileMenuItem label="Notifications" />
                  </div>

                  <div className="border-t border-gray-100 p-2">
                    <ProfileMenuItem label="Logout" danger />
                  </div>
                </div>
              )}
            </div>

          </div>

        </header>

        {profileDetailsOpen && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/30 p-5">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="profile-dialog-title"
              className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="profile-dialog-title" className="text-xl font-semibold">
                    My profile
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Manage your personal account information.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close profile"
                  onClick={() => setProfileDetailsOpen(false)}
                  className="rounded-lg px-2 py-1 text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-black"
                >
                  &times;
                </button>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <ProfileField
                  label="Full Name"
                  value={profile.fullName}
                  disabled={!editingProfile}
                  onChange={(value) => setProfile({ ...profile, fullName: value })}
                />
                <ProfileField
                  label="Email"
                  type="email"
                  value={profile.email}
                  disabled={!editingProfile}
                  onChange={(value) => setProfile({ ...profile, email: value })}
                />
                <ProfileField
                  label="Phone"
                  type="tel"
                  value={profile.phone}
                  disabled={!editingProfile}
                  onChange={(value) => setProfile({ ...profile, phone: value })}
                />
                <ProfileField
                  label="Role"
                  value={profile.role}
                  disabled
                  onChange={() => undefined}
                />
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setEditingProfile(true)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  Edit profile
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingProfile(false);
                    setProfileDetailsOpen(false);
                  }}
                  className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}

        {companyDetailsOpen && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/30 p-5">
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="company-dialog-title"
              className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="company-dialog-title" className="text-xl font-semibold">
                    Company
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Manage the company information used by your sales agent.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close company"
                  onClick={() => setCompanyDetailsOpen(false)}
                  className="rounded-lg px-2 py-1 text-xl leading-none text-gray-400 hover:bg-gray-100 hover:text-black"
                >
                  &times;
                </button>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <ProfileField
                  label="Company name"
                  value={company.name}
                  disabled={!editingCompany}
                  onChange={(value) => setCompany({ ...company, name: value })}
                />
                <ProfileField
                  label="Website"
                  type="url"
                  value={company.website}
                  disabled={!editingCompany}
                  onChange={(value) => setCompany({ ...company, website: value })}
                />
                <ProfileField
                  label="Industry"
                  value={company.industry}
                  disabled={!editingCompany}
                  onChange={(value) => setCompany({ ...company, industry: value })}
                />
                <ProfileField
                  label="Business location"
                  value={company.location}
                  disabled={!editingCompany}
                  onChange={(value) => setCompany({ ...company, location: value })}
                />
                <ProfileField
                  label="Company description"
                  value={company.description}
                  disabled={!editingCompany}
                  onChange={(value) => setCompany({ ...company, description: value })}
                  multiline
                />
                <ProfileField
                  label="Target customers"
                  value={company.customers}
                  disabled={!editingCompany}
                  onChange={(value) => setCompany({ ...company, customers: value })}
                  multiline
                />
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={() => setEditingCompany(true)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium hover:bg-gray-50"
                >
                  Edit company
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingCompany(false);
                    setCompanyDetailsOpen(false);
                  }}
                  className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CONTENT */}
        <section className="p-8">

          {/* GREETING */}
          <div className="mb-8">

            <h1 className="text-3xl font-bold">
              Good afternoon 👋
            </h1>

            <p className="mt-2 text-gray-500">
              Here&apos;s what&apos;s happening with your sales leads today.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            <StatCard
              title="Total Leads"
              value="250"
              change="+12.5%"
              icon={<Users size={20} />}
            />

            <StatCard
              title="Calls Made"
              value="180"
              change="+8.2%"
              icon={<PhoneCall size={20} />}
            />

            <StatCard
              title="Hot Leads"
              value="32"
              change="+18.4%"
              icon={<Flame size={20} />}
            />

            <StatCard
              title="Callbacks"
              value="18"
              change="+6.8%"
              icon={<Clock3 size={20} />}
            />

          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">

            {/* HOT LEADS */}
            <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200">

              <div className="flex items-center justify-between p-6 border-b border-gray-100">

                <div>
                  <h2 className="font-semibold text-lg">
                    Hot Leads
                  </h2>

                  <p className="text-sm text-gray-400">
                    Leads with high buying intent
                  </p>
                </div>

                <button className="text-sm font-medium flex items-center gap-1 hover:underline">
                  View all
                  <ArrowUpRight size={15} />
                </button>

              </div>

              <div>

                {leads.map((lead) => (

                  <div
                    key={lead.name}
                    className="flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-0"
                  >

                    <div className="flex items-center gap-4">

                      <div className="h-11 w-11 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                        {lead.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-medium">
                          {lead.name}
                        </p>

                        <p className="text-sm text-gray-400">
                          {lead.company}
                        </p>
                      </div>

                    </div>

                    <div className="flex items-center gap-5">

                      <div className="text-right">

                        <p className="text-sm text-gray-400">
                          Lead Score
                        </p>

                        <p className="font-semibold">
                          {lead.score}/100
                        </p>

                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          lead.status === "HOT"
                            ? "bg-red-50 text-red-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {lead.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* AI AGENT CARD */}
            <div className="bg-black text-white rounded-2xl p-6">

              <div className="flex items-center justify-between">

                <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <Bot size={22} />
                </div>

                <span className="flex items-center gap-2 text-xs bg-white/10 px-3 py-1.5 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Online
                </span>

              </div>

              <h2 className="text-xl font-semibold mt-6">
                AI Sales Agent
              </h2>

              <p className="text-sm text-gray-400 mt-2 leading-6">
                Your AI agent is ready to make calls, qualify leads
                and schedule callbacks automatically.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Calls today
                  </span>

                  <span>
                    42
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Conversations
                  </span>

                  <span>
                    31
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">
                    Avg. duration
                  </span>

                  <span>
                    03:42
                  </span>
                </div>

              </div>

              <button className="w-full mt-8 bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                Configure Agent
              </button>

            </div>

          </div>

          {/* RECENT CALLS */}
          <div className="mt-8 bg-white rounded-2xl border border-gray-200">

            <div className="p-6 border-b border-gray-100">

              <h2 className="font-semibold text-lg">
                Recent Calls
              </h2>

              <p className="text-sm text-gray-400">
                Latest conversations handled by your AI agent
              </p>

            </div>

            <div>

              {calls.map((call) => (

                <div
                  key={call.name}
                  className="flex items-center justify-between px-6 py-5 border-b border-gray-100 last:border-0"
                >

                  <div className="flex items-center gap-4">

                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Phone size={17} />
                    </div>

                    <div>

                      <p className="font-medium">
                        {call.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        Today
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-8">

                    <span className="text-sm text-gray-500">
                      {call.duration}
                    </span>

                    <span className="text-sm font-medium">
                      {call.result}
                    </span>

                    <button className="text-sm text-gray-500 hover:text-black">
                      View
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}


/* NAV ITEM */

function NavItem({
  icon,
  label,
  href,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
        active
          ? "bg-black text-white"
          : "text-gray-500 hover:bg-gray-100 hover:text-black"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

function ProfileMenuItem({
  label,
  danger = false,
  onClick,
}: {
  label: string;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}

function ProfileField({
  label,
  value,
  type = "text",
  disabled = false,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  type?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">{label}</span>
      {multiline ? (
        <textarea
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
          rows={3}
          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-black disabled:bg-gray-50 disabled:text-gray-500"
        />
      ) : (
        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-black disabled:bg-gray-50 disabled:text-gray-500"
        />
      )}
    </label>
  );
}


/* STAT CARD */

function StatCard({
  title,
  value,
  change,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">

      <div className="flex items-center justify-between">

        <p className="text-sm text-gray-500">
          {title}
        </p>

        <div className="h-9 w-9 rounded-lg bg-gray-100 flex items-center justify-center">
          {icon}
        </div>

      </div>

      <div className="flex items-end justify-between mt-5">

        <p className="text-3xl font-bold">
          {value}
        </p>

        <span className="text-xs font-medium text-green-600">
          {change}
        </span>

      </div>

    </div>
  );
} 