import { useState, useEffect } from 'react';
import { searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interface/Candidate';

const CandidateSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [candidates, setCandidates] = useState<Candidate[]>([]); 

  useEffect(() => {
    
    const fetchCandidates = async () => {
      const response = await searchGithubUser(searchTerm);
      setCandidates(response.items);
    };

    if (searchTerm) {
      fetchCandidates();
    }
  }, [searchTerm]);

  const addToSavedCandidates = () => {
    let parsedCandidates: Candidate[] = [];
    const savedCandidates = localStorage.getItem('savedCandidates');
    if (typeof savedCandidates === 'string') {
      parsedCandidates = JSON.parse(savedCandidates);
    }
    parsedCandidates.push(candidates[0]);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedCandidates));
    setCandidates(candidates.slice(1)); 
  };

  return (
    <div>
      <h1>Candidate Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a candidate"
      />
      {candidates.length > 0 && (
        <div>
          <CandidateCard candidate={candidates[0]} />
          <button onClick={addToSavedCandidates}>+</button>
          <button onClick={() => setCandidates(candidates.slice(1))}>-</button>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;
