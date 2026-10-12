import { Suspense } from "react";
import TransactionList from "./components/transaction-list";

export default function Page() {
    return (
        <Suspense fallback={<p>Loading transactions...</p>}>
            <TransactionList />
        </Suspense>
    )
}