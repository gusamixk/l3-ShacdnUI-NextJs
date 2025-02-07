
import { BadgeList } from "../components/badge/BadgeList";
import { DashboardTable } from "../components/DashboardTable";
import { DashboardLayout } from "@/components/Layouts/DashboardLayout";



export const DashboardPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="mt-12">
                <BadgeList/>
                <div className="mb-4 grid grid-cols-1 gap-6">
                    <DashboardTable/>
                </div>
            </div>

        </div>
    );
};