import './VoteOption.css'

export function VoteOption({ name, votes, totalVotes, onVote }) {
  const percentage = totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100)

  return (
    <div className="vote-option">
      <div className="option-header">
        <h3>{name}</h3>
        <span className="percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="option-footer">
        <span className="vote-count">Votos: {votes}</span>
        <button className="vote-btn" onClick={onVote}>
          Votar
        </button>
      </div>
    </div>
  )
}
