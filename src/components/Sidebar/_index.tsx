import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/_core/sidebar';
import {
  SidebarItem
} from './sidebarItems';

interface MainSidebarProps {
  contentItems?: SidebarItem[];
  footerItems?: SidebarItem[];
  activeIndex?: number | null;
}

const MainSidebar = ({
  contentItems = [],
  footerItems = [],
  activeIndex = null,
}: MainSidebarProps) => {
    return (
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>

              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {contentItems.map(({title, icon: Icon, onClick}, i) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton
                    isActive={activeIndex === i ? true : false}
                    onClick={onClick}
                    tooltip={title}
                  >
                      <Icon />
                      <span>{title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            {footerItems.map(({title, url, icon: Icon}) => (
                <SidebarMenuItem key={title}>
                  <SidebarMenuButton tooltip={title} asChild>
                    <a href={url}>
                      <Icon />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;