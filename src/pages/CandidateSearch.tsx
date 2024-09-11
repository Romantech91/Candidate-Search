import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../utils/interface/Candidate';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await searchGithub();
        setCandidate(response[0]);
      } catch (err) {
        setError('Failed to fetch candidates');
      }
    };

      fetchCandidate();
  }, []);

  const addToSavedCandidates = () => {
    let parsedCandidates: Candidate[] = [];
    const savedCandidates = localStorage.getItem('savedCandidates');
    if (typeof savedCandidates === 'string') {
      parsedCandidates = JSON.parse(savedCandidates);
    }
    if (candidate) {
    parsedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    setCandidate(null); 
  }
  };

  const fetchNextCandidate = async () => {
    try {
      const response = await searchGithub();
      setCandidate(response[0]);
    } catch (err) {
      setError('Failed to fetch candidates');
    }
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      {error && <p>{error}</p>}
      {candidate ? (
        <div>
          <CandidateCard candidate={candidate} />
          <button onClick={addToSavedCandidates}>+</button>
          <button onClick={fetchNextCandidate}>-</button>
        </div>
      ) : (
        <p>Loading candidate...</p>
      )}
    </div>
  );
};

export default CandidateSearch;
