import type React from 'react';
import { useEffect, useState } from 'react';
import { Candidate } from '../interface/Candidate';
import CandidateCard from '../components/CandidateCard'; 


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
              <CandidateCard candidate={candidate} />
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
