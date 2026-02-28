import { useState } from 'react'
import './VoteOption.css'

export function VoteOption({ name, votes, totalVotes, isLeading, onVote, onRename }) {
  const percentage = totalVotes === 0 ? 0 : Math.round((votes / totalVotes) * 100)
  const [editedName, setEditedName] = useState(name)

  const handleRenameSubmit = (event) => {
    event.preventDefault()
    onRename(editedName)
  }

  const handleNameChange = (event) => {
    setEditedName(event.target.value)
  }

  return (
    <div className={`vote-option ${isLeading ? 'vote-option-leading' : ''}`}>
      <div className="option-header">
        <h3>{name}</h3>
        <span className="percentage">{percentage}%</span>
      </div>
      <div className={`progress-bar ${isLeading ? 'progress-bar-leading' : ''}`}>
        <div
          className={`progress-fill ${isLeading ? 'progress-fill-leading' : ''}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <form className="rename-form" onSubmit={handleRenameSubmit}>
        <input
          className="rename-input"
          type="text"
          value={editedName}
          onChange={handleNameChange}
          placeholder="Nuevo nombre"
        />
        <button className="rename-btn" type="submit">
          Cambiar nombre
        </button>
      </form>
      <div className="option-footer">
        <span className="vote-count">Votos: {votes}</span>
        <button className="vote-btn" onClick={onVote}>
          Votar
        </button>
      </div>
    </div>
  )
}
