import { FC } from "react";

const Header: FC = () => {
    return (
        <header className="basis-16 bg-blue-400 px-8 py-2">
            <div className="flex">
                <h1 className="h-12 w-40 bg-slate-400 text-xl">Logo</h1>
            </div>
        </header>
    );
};

export default Header;
