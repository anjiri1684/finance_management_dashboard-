import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <CountUp
        decimal=","
        duration={2.75}
        decimals={2}
        prefix="Kes"
        end={amount}
      />
    </div>
  );
}

export default AnimatedCounter;
