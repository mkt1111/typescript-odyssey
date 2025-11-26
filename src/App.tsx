import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import BasicTypes from "./pages/BasicTypes";
import Functions from "./pages/Functions";
import Interfaces from "./pages/Interfaces";
import Classes from "./pages/Classes";
import Generics from "./pages/Generics";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="h-14 border-b border-border flex items-center px-4 bg-card sticky top-0 z-10">
                <SidebarTrigger className="text-foreground" />
              </header>
              <main className="flex-1 overflow-auto">
                <Routes>
                  <Route path="/" element={<BasicTypes />} />
                  <Route path="/functions" element={<Functions />} />
                  <Route path="/interfaces" element={<Interfaces />} />
                  <Route path="/classes" element={<Classes />} />
                  <Route path="/generics" element={<Generics />} />
                  <Route path="/quiz" element={<Quiz />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
