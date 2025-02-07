import TableProduct  from "@/features/table/components/TableProduct";




export const TablePage = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="mt-12">
                <TableProduct 
                    id={1} 
                    title="title" 
                    price={100} 
                    category="Category" 
                    description="Description" 
                    image="image"
                />
            </div>
        </div>
    )
}