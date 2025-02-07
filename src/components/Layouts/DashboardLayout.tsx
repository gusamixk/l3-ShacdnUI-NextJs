import { Sidebar} from "@/components/fragments/sidebar/Sidebar";
import { Container } from "./Container";


type DashboardLayoutProps = {
    children: React.ReactNode;
    className?: string;
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, className }) => {
    return (
        <div className="flex">
            <Sidebar className={`${className} w-full px-8`}>
                <Container className="p-4 xl:ml-72">
                    {children}
                </Container>
            </Sidebar>
        </div>
    )
};