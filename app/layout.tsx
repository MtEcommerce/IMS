import { FC, ReactNode } from "react";
import { Noto_Sans_TC } from "@next/font/google";
import { Header, Aside } from "@components/Layout";
import "./global.css";

const notoSansTC = Noto_Sans_TC({
    weight: "400",
    subsets: ["chinese-traditional"],
});

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <html lang="zh-TW" className={notoSansTC.className}>
            <head>
                <title>運營管理系統</title>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <div className="flex h-screen flex-col">
                    <Header />
                    <div className="flex max-h-[calc(100vh-64px)] grow basis-auto">
                        <Aside />
                        <main className="h-full grow overflow-y-scroll">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
