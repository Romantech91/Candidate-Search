import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <nav>
        <h1>Navigation</h1>
        <ul>
          <li>
            <Link to="/" className="active">
              Candidate Search {currentPage === '/candidate-search' && '(Current)'}
            </Link>
          </li>
          <li>
            <Link to="/saved-candidates" className="active">
              Saved Candidates {currentPage === '/saved-candidates' && '(Current)'}
            </Link>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
