import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

function BudgetPlanner() {
  return (
    <PageHero
      className="planner-hero"
      title={<><em>Budget</em> Planner</>}
      text="Learn budgeting fundamentals, then plug in your real numbers to build a personalized monthly budget."
    >
      <Link className="button button-dark" to="/budget-planner">&#128218; Learn the Basics</Link>
      <Link className="button button-outline" to="/budget-planner">&#129518; Build My Budget</Link>
    </PageHero>
  );
}

export default BudgetPlanner;
