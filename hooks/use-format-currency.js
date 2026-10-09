import { useMemo } from "react"

export const useFormatCurrency = (amount) => {
    const formatCurrency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount)

    return useMemo(() => formatCurrency(amount), [amount])
}