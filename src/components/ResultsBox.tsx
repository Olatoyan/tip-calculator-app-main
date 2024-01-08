type ResultsBoxProps = {
  tipPerPerson: number;
  totalPerPerson: number;
  resetCalculator: () => void;
};

function ResultsBox({ tipPerPerson, totalPerPerson,resetCalculator }: ResultsBoxProps) {
  return (
    <div className="bg-very-dark-cyan rounded-3xl p-16 flex flex-col">
      <div className="flex justify-between items-center pb-[2.5rem]">
        <h2 className="text-[1.6rem] font-bold text-white">
          Tip Amount <br />{" "}
          <span className="text-[1.3rem] text-[#7F9D9F]">/ person</span>
        </h2>
        <h3 className="text-[4.8rem] tracking-[-0.1rem] font-bold text-green-cyan">
          ${tipPerPerson}
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-[1.6rem] font-bold text-white">
          Total <br />{" "}
          <span className="text-[1.3rem] text-[#7F9D9F]">/ person</span>
        </h2>
        <h3 className="text-[4.8rem] tracking-[-0.1rem] font-bold text-green-cyan">
          ${totalPerPerson}
        </h3>
      </div>
      <button className={`uppercase rounded-lg py-4 text-[2rem] font-bold text-very-dark-cyan mt-auto disabled:cursor-not-allowed ${tipPerPerson === 0 && totalPerPerson === 0 ? "bg-[#0D686D]" : "bg-green-cyan"}`} disabled={tipPerPerson === 0 && totalPerPerson === 0} onClick={resetCalculator}>
        Reset
      </button>
    </div>
  );
}

export default ResultsBox;
