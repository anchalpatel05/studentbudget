import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

function SavingsGoals() {
  return (
    <PageHero
      className="savings-hero"
      title={<><em>Savings</em> Goals</>}
      text="Set goals, track progress, and celebrate wins. Whether it's a trip, a laptop, or your first emergency fund — every dollar counts."
    >
      <Link className="button button-gold" to="/savings-goals">+ New Savings Goal</Link>
    </PageHero>
  );
}

export default SavingsGoals;
