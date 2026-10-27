import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import StatCard from '../components/StatCard';
import GoalCard from '../components/GoalCard';
import TipCard from '../components/TipCard';
import './SavingsGoals.css';

const stats = [
  { label: 'Total Saved', number: '$1270', color: 'budget' },
  { label: 'Total Goal', number: '$2500', color: 'savings' },
  { label: 'Goals Completed', number: '1 / 3', color: 'loans' },
];

const goals = [
  { icon: '✈️', iconColor: 'budget', title: 'Spring Break Trip', target: '$800', saved: '$320', percent: 40, note: '$480 to go · ~10 weeks at $50/wk' },
  { icon: '💻', iconColor: 'loans', title: 'New Laptop', target: '$1,200', saved: '$450', percent: 38, note: '$750 to go · ~15 weeks at $50/wk', color: 'purple' },
  { icon: '🛡️', iconColor: 'savings', title: 'Emergency Fund', target: '$500', saved: '$500', percent: 100, note: '$0 to go', color: 'gold', completed: true },
];

const tips = [
  { icon: '🔄', title: 'Automate it', text: 'Set up an auto-transfer on payday. Even $20/week = $1,040/year without thinking about it.' },
  { icon: '🪙', title: 'Round-up rule', text: 'Every time you spend $7.40, round up to $8 and move $0.60 to savings. It adds up fast.' },
  { icon: '📦', title: 'Separate accounts', text: 'Open a free high-yield savings account (try Ally or Marcus) just for goals. Out of sight, out of mind.' },
  { icon: '🎯', title: 'Name your goals', text: '"Spring Break Fund" is more motivating than just "savings." A named goal has a purpose.' },
];

function SavingsGoals() {
  return (
    <>
      <PageHero
        className="savings-hero"
        title={<><em>Savings</em> Goals</>}
        text="Set goals, track progress, and celebrate wins. Whether it's a trip, a laptop, or your first emergency fund — every dollar counts."
      >
        <Link className="button button-gold" to="/savings-goals">+ New Savings Goal</Link>
      </PageHero>

      <section className="goals-section">
        <div className="goals-content">
          <div className="stat-list">
            {stats.map((stat) => (
              <StatCard key={stat.label} label={stat.label} number={stat.number} color={stat.color} />
            ))}
          </div>

          <div className="goal-list">
            {goals.map((goal) => (
              <GoalCard
                key={goal.title}
                icon={goal.icon}
                iconColor={goal.iconColor}
                title={goal.title}
                target={goal.target}
                saved={goal.saved}
                percent={goal.percent}
                note={goal.note}
                color={goal.color}
                completed={goal.completed}
              />
            ))}
          </div>

          <h2>How to Actually Hit Your Goals</h2>
          <div className="tip-list">
            {tips.map((tip) => (
              <TipCard key={tip.title} icon={tip.icon} title={tip.title} text={tip.text} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SavingsGoals;
