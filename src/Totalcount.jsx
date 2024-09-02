import "./assets/Totalcount.css";

export default function Totalcount({ count }) {
  return (
    <div className="totalCount">
      <p className="total">
        Total <span className="count">{count}</span>
      </p>
    </div>
  );
}
