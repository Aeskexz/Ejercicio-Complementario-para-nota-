import { useState } from 'react'
import { VoteOption } from './VoteOption'
import './VoteList.css'

export function VoteList() {
  const [votesData, setVotesData] = useState([
    { id: 1, name: 'React', votes: 0 },
    { id: 2, name: 'Vue', votes: 0 },
    { id: 3, name: 'Angular', votes: 0 },
    { id: 4, name: 'Svelte', votes: 0 },
  ])

  const totalVotes = votesData.reduce((sum, option) => sum + option.votes, 0)

  const handleVote = (id) => {
    setVotesData(
      votesData.map((option) =>
        option.id === id ? { ...option, votes: option.votes + 1 } : option
      )
    )
  }

  const handleReset = () => {
    setVotesData(votesData.map((option) => ({ ...option, votes: 0 })))
  }

  return (
    <div className="vote-list-container">
      <div className="vote-header">
        <h1>⚡ Contador de Votos</h1>
        <p className="total-votes">Total de votos: {totalVotes}</p>
      </div>

      <div className="vote-options">
        {votesData.map((option) => (
          <VoteOption
            key={option.id}
            name={option.name}
            votes={option.votes}
            totalVotes={totalVotes}
            onVote={() => handleVote(option.id)}
          />
        ))}
      </div>

      <button className="reset-btn" onClick={handleReset}>
        🔄 Reiniciar Votos
      </button>
    </div>
  )
}
