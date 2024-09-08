import React from 'react';
import { Candidate } from '../interface/Candidate';

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
    return (
        <div>
        <img src={candidate.avatar_url} alt={candidate.login} />
        <h2>{candidate.login}</h2>
        <a href= {candidate.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
        </a>
        </div>
    );
}
export default CandidateCard;