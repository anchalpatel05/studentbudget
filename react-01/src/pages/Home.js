import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className="hero">
      <p className="hero-label">Free for every student</p>
      <h1>Stop stressing about money. Start thriving.</h1>
      <p className="intro">My Student Finance gives you budgeting tools, a spending tracker, savings planner, and loan guides — everything you need to manage money like a pro on a student budget.</p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/budget-planner">Start Budget Planner &rarr;</Link>
        <Link className="button" to="/spending-tracker">Track My Spending</Link>
      </div>
    </main>
  );
}

export default Home;
