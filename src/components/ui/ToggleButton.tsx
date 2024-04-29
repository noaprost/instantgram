import { ReactNode } from "react";

type Props = {
  toggled: boolean;
  onToggle: (toggled: boolean) => void;
  onIcon: ReactNode;
  offIcon: ReactNode;
};

export default function ToggleButton({
  toggled,
  onToggle,
  onIcon,
  offIcon,
}: Props) {
  return (
    <button onClick={() => onToggle(!toggled)}>
      {toggled ? onIcon : offIcon}
    </button>
  );
}
