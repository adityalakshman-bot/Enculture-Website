interface FromToRowProps {
  from: string;
  to: string;
}

export function FromToRow({ from, to }: FromToRowProps) {
  return (
    <div className="from-to-row">
      <div className="from-label">{from}</div>
      <div className="arrow">&rarr;</div>
      <div className="to-label">{to}</div>
    </div>
  );
}
