type SelectTipItemProps = {
  tip: number;
  tips: number;
  onSelectTip: (tip: number) => void;
};

function SelectTipItem({ tip, onSelectTip, tips }: SelectTipItemProps) {
  return (
    <li>
      <button
        onClick={() => onSelectTip(tip)}
        className={`text-[2.4rem] font-bold px-[1.3rem] py-[0.6rem] rounded-lg w-full ${
          tip === tips
            ? "bg-green-cyan text-very-dark-cyan"
            : "bg-very-dark-cyan text-white"
        }`}
      >
        {tip}%
      </button>
    </li>
  );
}

export default SelectTipItem;
