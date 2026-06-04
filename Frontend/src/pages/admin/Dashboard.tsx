import { useState } from "react";

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

const DUMMY_MESSAGES: ContactMessage[] = [
  {
    _id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    message: "Hello, I am interested in your services and would like to know more about the pricing plans you offer.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), 
  },
  {
    _id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    message: "I encountered a bug on the checkout page. Could you please look into it? Thanks!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), 
  },
  {
    _id: "3",
    name: "Alice Johnson",
    email: "alice.j@example.com",
    message: "Great application! Really enjoying the user experience so far.",
    createdAt: new Date().toISOString(), 
  },
  {
    _id: "4",
    name: "Bob Builder",
    email: "bob@builder.com",
    message: "Do you offer any customized solutions for enterprise clients? Let's connect.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), 
  }
];

const Dashboard = () => {
  const [messages] = useState<ContactMessage[]>(DUMMY_MESSAGES);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-extrabold text-[#2d6a6a]">Contact Messages</h3>
        <span className="px-4 py-1.5 bg-[#2d6a6a]/10 text-[#2d6a6a] rounded-full text-sm font-extrabold">
          {messages.length} Total
        </span>
      </div>

      {messages.length === 0 ? (
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-sm border border-[#2d6a6a]/10 text-center">
          <p className="text-[#2d6a6a]/70 font-medium">No messages found yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((msg) => (
            <div key={msg._id} className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#2d6a6a]/10 hover:border-[#e8a598]/50 transition-colors flex flex-col h-full group">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 bg-[#e8a598]/20 text-[#e8a598] rounded-full flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#e8a598] group-hover:text-white transition-colors">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="truncate">
                    <p className="text-sm font-extrabold text-[#2d6a6a] truncate">{msg.name}</p>
                    <a href={`mailto:${msg.email}`} className="text-xs font-bold text-[#2d6a6a]/60 hover:text-[#e8a598] transition-colors truncate block">
                      {msg.email}
                    </a>
                  </div>
                </div>
                <div className="text-xs font-bold text-[#2d6a6a]/40 whitespace-nowrap pl-2">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="flex-1 bg-[#f4f1ea]/50 p-4 rounded-xl border border-[#2d6a6a]/5">
                <p className="text-sm text-[#2d6a6a]/80 leading-relaxed whitespace-pre-wrap font-medium">
                  {msg.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;