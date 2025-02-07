import { DashboardLayout as DashboardLayoutComponent } from "@/components/Layouts/DashboardLayout"

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return <DashboardLayoutComponent>{children}</DashboardLayoutComponent>
}
export default DashboardLayout