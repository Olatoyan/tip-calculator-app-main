import { useState } from "react";
import CalculateBox from "./CalculateBox";
import Logo from "./Logo";
import ResultsBox from "./ResultsBox";

function HomePage() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);

  function handleBillChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(Number(e.target.value));
  }

  function handlePeopleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPeople(Number(e.target.value));
  }
  function handleTipChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTip(Number(e.target.value));
  }

  function handleSelectTip(tip: number) {
    setTip(Number(tip));
  }

  function resetCalculator(){
    setBill(0);
    setPeople(0);
    setTip(0);
  }

  const tipPerPerson = +((bill / people) * (tip / 100)).toFixed(2);
  const totalPerPerson = +((bill / people + tipPerPerson)).toFixed(2);

  return (
    <main className=" max-w-[92rem] flex flex-col gap-36 items-center mobile:gap-16 mobile:pt-16">
      <Logo />

      <section className="bg-white rounded-[2.5rem] shadow-bg-sh p-[3.2rem] grid grid-cols-2 gap-12 tablet:grid-cols-1 tablet:rounded-[2.5rem_2.5rem_0_0] mobile:px-8">
        <CalculateBox
          bill={bill}
          onBillChange={handleBillChange}
          people={people}
          onPeopleChange={handlePeopleChange}
          tip={tip}
          onSelectTip={handleSelectTip}
          onTipChange={handleTipChange}
        />
        <ResultsBox
          totalPerPerson={(tip === 0 || people === 0)? 0 : totalPerPerson}
          tipPerPerson={(tip === 0 || people === 0)? 0 : tipPerPerson}
          resetCalculator={resetCalculator}
        />
      </section>
    </main>
  );
}

export default HomePage;
