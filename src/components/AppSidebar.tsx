import { Code2, FileText, Boxes, Layers, Puzzle, Trophy, BookOpen } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const topics = [
  { title: "Introduction", url: "/", icon: BookOpen },
  { title: "Basic Types", url: "/basic-types", icon: Code2 },
  { title: "Functions", url: "/functions", icon: FileText },
  { title: "Interfaces", url: "/interfaces", icon: Boxes },
  { title: "Classes", url: "/classes", icon: Layers },
  { title: "Generics", url: "/generics", icon: Puzzle },
  { title: "Quiz", url: "/quiz", icon: Trophy },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent>
        <div className="p-4 border-b border-sidebar-border">
          {!isCollapsed && (
            <h2 className="text-xl font-bold text-primary flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              TypeScript Lab
            </h2>
          )}
          {isCollapsed && <Code2 className="h-6 w-6 text-primary mx-auto" />}
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>Topics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {topics.map((topic) => (
                <SidebarMenuItem key={topic.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={topic.url}
                      end
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <topic.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{topic.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
