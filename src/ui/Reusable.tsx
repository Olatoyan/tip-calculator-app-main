type ReusableProps = {
  id: string;
  name: string;
  img: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
function Reusable({ id, name, img, value, onChange }: ReusableProps) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="text-[1.6rem] font-bold text-dark-cyan">
        {name}
      </label>
      <div className="bg-input-bg flex items-center justify-between py-3 px-6">
        <img src={img} alt={`An icon for ${name}`} />
        <input
          type="number"
          value={value}
          onChange={onChange}
          className="bg-transparent border-none outline-none text-right text-[2.4rem] font-bold text-very-dark-cyan"
        />
      </div>
    </div>
  );
}

export default Reusable;
