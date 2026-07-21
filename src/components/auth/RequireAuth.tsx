import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const RequireAuth = () => {
  const { user, loading, configured } = useAuth();
  const location = useLocation();

  if (!configured) return <Navigate to="/login" replace />;
  if (loading) return <div className="min-h-screen bg-[#F8FAFC] pt-40 text-center text-sm text-muted-foreground">Loading your account…</div>;
  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  return <Outlet />;
};

export default RequireAuth;
