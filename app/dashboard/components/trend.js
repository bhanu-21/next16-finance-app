import Basetrend from "@/components/trend"

export default async function Trend({ type }) {
    const response = await fetch(`${process.env.API_URL}/trends/${type}`)
    const { amount, prevAmount } = await response.json()

    return (
        <Basetrend type={type} amount={amount} prevAmount={prevAmount} />
    )
}