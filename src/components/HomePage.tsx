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

  function handleSelectTip(tip: number) {
    setTip(Number(tip));
  }

  const tipPerPerson = (bill / people) * (tip / 100);
  const totalPerPerson = bill / people + tipPerPerson;

  return (
    <main className=" max-w-[92rem] flex flex-col gap-36 items-center">
      <Logo />

      <section className="bg-white rounded-[2.5rem] shadow-bg-sh p-[3.2rem] grid grid-cols-2 gap-12">
        <CalculateBox
          bill={bill}
          onBillChange={handleBillChange}
          people={people}
          onPeopleChange={handlePeopleChange}
          tip={tip}
          onSelectTip={handleSelectTip}
        />
        <ResultsBox
          totalPerPerson={totalPerPerson}
          tipPerPerson={tipPerPerson}
        />
      </section>
    </main>
  );
}

export default HomePage;
