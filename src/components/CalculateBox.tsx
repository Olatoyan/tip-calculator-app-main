import Reusable from "../ui/Reusable";
import SelectTip from "./SelectTip";

type CalculateBoxProps = {
  bill: number;
  people: number;
  tip: number;
  onBillChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPeopleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectTip: (tip: number) => void;
  onTipChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function CalculateBox({
  bill,
  onBillChange,
  people,
  onPeopleChange,
  tip,
  onSelectTip,
  onTipChange,
}: CalculateBoxProps) {
  return (
    <div className="space-y-16 ">
      <Reusable
        id="bill"
        name="Bill"
        img="./icon-dollar.svg"
        value={bill}
        onChange={onBillChange}
      />
      <SelectTip tips={tip} onSelectTip={onSelectTip} onTipChange={onTipChange} />
      <Reusable
        id="people"
        name="Number of People"
        img="./icon-person.svg"
        value={people}
        onChange={onPeopleChange}
      />
    </div>
  );
}

export default CalculateBox;
