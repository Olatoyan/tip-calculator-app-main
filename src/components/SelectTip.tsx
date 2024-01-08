import SelectTipItem from "./SelectTipItem";

type SelectTipProps = {
  tips: number;
  onSelectTip: (tip: number) => void;
};

function SelectTip({ tips, onSelectTip }: SelectTipProps) {
  return (
    <div>
      <h2 className="text-dark-cyan text-[1.6rem] font-bold pb-7">
        Select Tip %
      </h2>

      <div>
        <ul className="grid grid-cols-3 gap-6">
          <SelectTipItem tip={5} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={10} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={15} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={25} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={50} onSelectTip={onSelectTip} tips={tips} />
          <input
            type="number"
            placeholder="Custom"
            className="text-[2.4rem] text-right font-bold text-very-pale-cyan border-none outline-none"
          />
        </ul>
      </div>
    </div>
  );
}

export default SelectTip;
