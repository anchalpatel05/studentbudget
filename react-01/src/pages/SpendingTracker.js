import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

function SpendingTracker() {
  return (
    <PageHero
      className="tracker-hero"
      title={<><em>Spending</em> Tracker</>}
      text="Log your purchases, set a monthly budget, and see exactly where your money goes. Knowledge is the first step to control."
    >
      <label className="budget-input">
        Monthly budget: $
        <input type="number" defaultValue="500" />
      </label>
      <Link className="button button-red" to="/spending-tracker">+ Add Expense</Link>
    </PageHero>
  );
}

export default SpendingTracker;
