import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginForm } from "../../components";
import { RiLogoutBoxRLine, RiMailOpenLine } from "@remixicon/react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, logoutAdmin } from "../../features/admin/admin.slice";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminData } = useSelector((state: any) => state.admin);

  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const check = async () => {
      let loginInApi = false;
      const result = await dispatch(getCurrentUser());
      if (result.type === "getCurrentUser/fulfilled") {
        loginInApi = true;
      }
      setIsLogged(loginInApi);
      setIsLoading(false);
    }
    check();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea]">
        <div className="w-16 h-16 border-4 border-[#2d6a6a] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // If trying to access dashboard (or any other admin sub-route) and not logged in, redirect to login
  if (location.pathname !== "/admin" && !isLogged) {
    return <Navigate to="/admin" replace />;
  }

  // If at login page and already logged in, redirect to dashboard
  if (location.pathname === "/admin" && isLogged) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleLogin = () => {
    setIsLogged(true);
    navigate("/admin/dashboard");
  };

  const handleLogout = async () => {
    const result = await dispatch(logoutAdmin());
    if (result.type === "logoutAdmin/fulfilled") {
      setIsLogged(false);
      navigate("/admin");
    }
  };

  return location.pathname === "/admin" ? (
    <LoginForm onLogin={handleLogin} />
  ) : (
    <div className="flex h-screen bg-[#f4f1ea] overflow-hidden font-sans relative">

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out md:flex w-64 bg-[#2d6a6a] text-[#f4f1ea] flex-col shadow-2xl z-30`}
      >
        <div className="h-16 flex items-center justify-between md:justify-center px-4 md:px-0 border-b border-[#f4f1ea]/10">
          <h1 className="text-xl font-extrabold text-[#f4f1ea] tracking-wider uppercase">
            Admin Portal
          </h1>
          <button
            className="md:hidden text-[#f4f1ea]"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-[#e8a598]/20 rounded-xl text-[#e8a598] font-medium transition-colors shadow-inner" onClick={() => setIsSidebarOpen(false)}>
            <RiMailOpenLine
              size={24}
              className="text-[#e8a598]"
            />
            Messages
          </a>
        </nav>
        <div className="p-4 border-t border-[#f4f1ea]/10">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 w-full text-left text-[#e8a598] hover:bg-[#f4f1ea]/10 hover:text-[#f4f1ea] rounded-xl transition-colors font-medium">
            <RiLogoutBoxRLine
              size={24}
              className="text-[#e8a598]"
            />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden w-full">
        {/* Top Header */}
        <header className="h-16 bg-[#f4f1ea] border-b border-[#2d6a6a]/10 flex items-center justify-between px-4 md:px-8 shadow-sm z-10 w-full">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-[#2d6a6a] p-1 rounded-md hover:bg-[#2d6a6a]/5"
              onClick={() => setIsSidebarOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-[#2d6a6a]">Overview</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-[#2d6a6a] text-[#f4f1ea] rounded-full flex items-center justify-center font-bold shadow-md cursor-pointer ring-2 ring-white">
              {adminData?.data?.userName?.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-4 md:p-8 relative bg-[#f4f1ea] w-full">
          <div className="max-w-6xl mx-auto">
            <Outlet context={{ isLogged }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;