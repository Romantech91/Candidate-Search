import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <nav>
        <h1>Navigation</h1>
        <ul>
          <li>
            <Link to="/candidate-search" className="active">
              Candidate Search {currentPage === '/candidate-search' && '(Current)'}
            </Link>
          </li>
          <li>
            <Link to="/saved-candidates" className="active">
              Saved Candidates {currentPage === '/saved-candidates' && '(Current)'}
            </Link>
          </li>
          <li>
            <Link to="/error-page" className="active">
              Error Page {currentPage === '/error-page' && '(Current)'}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
