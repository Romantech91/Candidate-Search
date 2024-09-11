import React from 'react';
import { Candidate } from '../utils/interface/Candidate';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    return (
        <div>
       <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
      <h2>{candidate.name}</h2>
      <p>Username: {candidate.login}</p>
      <p>Location: {candidate.location}</p>
      <p>Email: {candidate.email}</p>
      <p>Company: {candidate.company}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
    );
}
export default CandidateCard;