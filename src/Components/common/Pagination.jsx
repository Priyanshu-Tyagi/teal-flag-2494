export default function Pagination({ current, onChange ,length }) {
    const array = Array.from({length:length},(_,i)=>i+1)
  return (
    <div className="paginationbtnmaindiv">
      <button onClick={()=>onChange(current-1)} disabled={current===1} className="pagination-text-btn-style">Previous</button>
      <div style={{ display: "flex" }}>
        {array.map((i)=>(
        <button className="pagination-num-btn-style" onClick={()=>onChange(1)} disabled={current===i}>{i}</button>
        ))}
        {/* <button className="pagination-num-btn-style" onClick={()=>onChange(4)} disabled={current===4}>4</button> */}
      </div>
      <button onClick={()=>onChange(current+1)} disabled={current===3} className="pagination-text-btn-style">Next</button>
    </div>
  );
}
