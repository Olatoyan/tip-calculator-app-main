import SelectTipItem from "./SelectTipItem";

type SelectTipProps = {
  tips: number;
  onSelectTip: (tip: number) => void;
  onTipChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SelectTip({ tips, onSelectTip, onTipChange }: SelectTipProps) {


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, '');

    onTipChange({
      ...e,
      target: {
        ...e.target,
        value: inputValue,
      },
    });
  };


  return (
    <div>
      <h2 className="text-dark-cyan text-[1.6rem] font-bold pb-7">
        Select Tip %
      </h2>

      <div>
        <ul className="grid grid-cols-3 gap-6 mobile:grid-cols-2">
          <SelectTipItem tip={5} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={10} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={15} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={25} onSelectTip={onSelectTip} tips={tips} />
          <SelectTipItem tip={50} onSelectTip={onSelectTip} tips={tips} />
          <input
            type="text"
            placeholder="Custom"
            // value={tips}
            onChange={handleInputChange}
            className="text-[2.4rem] text-right font-bold text-very-pale-cyan border-none outline-none bg-input-bg rounded-lg focus:border-[2px] focus "
          />
        </ul>
      </div>
    </div>
  );
}

export default SelectTip;
