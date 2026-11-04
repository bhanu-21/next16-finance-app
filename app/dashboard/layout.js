import PageHeader from "@/components/page-header";
import { connection } from "next/server";

export default async function Layout({ children }) {
    await connection();

    return (
        <>
            <PageHeader className="my-8" />

            <main>{children}</main>
            <footer className="mt-auto text-center py-8">Footer</footer>
        </>
    )
}