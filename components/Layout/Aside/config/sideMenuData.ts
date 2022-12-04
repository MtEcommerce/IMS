export interface ISideMenuData {
    id: number;
    name: string;
    children?: ISideMenuData[];
}

const SideMenuData: ISideMenuData[] = [
    {
        id: 0,
        name: "ProductManagement",
        children: [
            {
                id: 1,
                name: "ProductList",
            },
            {
                id: 2,
                name: "CreateProduct",
            },
        ],
    },
    {
        id: 3,
        name: "BatchJobManagement",
        children: [
            {
                id: 4,
                name: "BatchJobList",
            },
        ],
    },
];

export default SideMenuData;
