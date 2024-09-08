import type React from 'react';
import { useEffect, useState } from 'react';
import { Candidate } from '../interface/Candidate';


const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
   useEffect(() => {
    const savedCandidates = localStorage.getItem('savedCandidates');
    if (savedCandidates) {
      setSavedCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  const removeFromSavedCandidates = (id: number) => {
    const updatedCandidates = savedCandidates.filter((candidate) => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };
  return (
    <>
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
      <ul>
        {savedCandidates.map((candidate) => (
          <li key={candidate.id}>
            <img src={candidate.avatar_url} alt={`${candidate.login}'s avatar`} />
            <h2>{candidate.login}</h2>
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
            <button onClick={() => removeFromSavedCandidates(candidate.id)}>Remove</button>
          </li>
        ))}
      </ul>
      ) : (
        <p>No saved candidates</p>
      )}  
    </>
  );
};

export default SavedCandidates;
