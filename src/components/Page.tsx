import type { ReactNode } from "react";
import Header from "./Header";

function Page({ page }: { page: ReactNode }) {
    return (
        <>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" fill="black" />
                <path d="M7 10H41" stroke="white" stroke-width="2" />
                <path d="M7 24H41" stroke="white" stroke-width="2" />
                <path d="M7 38H41" stroke="white" stroke-width="2" />
            </svg>

            <Header />
            <div className="flex flex-col w-full h-full items-center bg-gray-950 overflow-y-scroll">
                {page}
            </div>
        </>
    );
}

export default Page;
