import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

function StudentLoans() {
  return (
    <PageHero
      className="loans-hero"
      title={<><em>Student Loans</em> &amp; Credit</>}
      text="Understand your loans before you sign. Learn how credit scores work, and avoid the debt traps that follow students for years."
    >
      <Link className="button button-dark" to="/student-loans">&#127891; Student Loans</Link>
      <Link className="button button-outline" to="/student-loans">&#128179; Credit Scores</Link>
      <Link className="button button-outline" to="/student-loans">&#129518; Loan Calculator</Link>
    </PageHero>
  );
}

export default StudentLoans;
