import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import StatCard from '../components/StatCard';
import ProgressBar from '../components/ProgressBar';
import Filter from '../components/Filter';
import Expense from '../components/Expense';
import CategoryBar from '../components/CategoryBar';
import './SpendingTracker.css';

const stats = [
  { label: 'Total Spent', number: '$139.87', color: 'spending' },
  { label: 'Budget Left', number: '$360.13', color: 'budget' },
  { label: '# of Purchases', number: '6', color: 'loans' },
];

const filters = ['All', 'Food & Dining', 'Transportation', 'Entertainment', 'Shopping', 'Housing', 'Health', 'Education', 'Other'];

const expenses = [
  { icon: '🚌', iconColor: 'budget', title: 'Uber to airport', category: 'Transportation', date: 'Sep 6', amount: '$22.00' },
  { icon: '🍕', iconColor: 'savings', title: 'Chipotle burrito bowl', category: 'Food & Dining', date: 'Sep 5', amount: '$11.25' },
  { icon: '📚', iconColor: 'savings', title: 'Target — notebooks + pens', category: 'Education', date: 'Sep 4', amount: '$18.45' },
  { icon: '🎉', iconColor: 'loans', title: 'Netflix subscription', category: 'Entertainment', date: 'Sep 3', amount: '$15.99' },
  { icon: '🚌', iconColor: 'budget', title: 'Monthly bus pass', category: 'Transportation', date: 'Sep 2', amount: '$30.00' },
  { icon: '🍕', iconColor: 'savings', title: 'Grocery run – Aldi', category: 'Food & Dining', date: 'Sep 1', amount: '$42.18' },
];

const categories = [
  { name: '🍕 Food & Dining', amount: '$53.43', percent: 38, color: 'gold' },
  { name: '🚌 Transportation', amount: '$52.00', percent: 37 },
  { name: '📚 Education', amount: '$18.45', percent: 13, color: 'gold' },
  { name: '🎉 Entertainment', amount: '$15.99', percent: 11, color: 'purple' },
];

function SpendingTracker() {
  return (
    <>
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

      <section className="tracker-section">
        <div className="tracker-content">
          <div className="tracker-main">
            <div className="stat-list">
              {stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} number={stat.number} color={stat.color} />
              ))}
            </div>

            <div className="progress-card">
              <div className="progress-title">
                <h3>Monthly Budget Progress</h3>
                <p>28% used</p>
              </div>
              <ProgressBar percent={28} />
            </div>

            <div className="filter-list">
              {filters.map((filter) => (
                <Filter key={filter} name={filter} active={filter === 'All'} />
              ))}
            </div>

            {expenses.map((expense) => (
              <Expense
                key={expense.title}
                icon={expense.icon}
                iconColor={expense.iconColor}
                title={expense.title}
                category={expense.category}
                date={expense.date}
                amount={expense.amount}
              />
            ))}
          </div>

          <aside className="tracker-side">
            <div className="category-card">
              <h3>Spending by Category</h3>
              {categories.map((category) => (
                <CategoryBar
                  key={category.name}
                  name={category.name}
                  amount={category.amount}
                  percent={category.percent}
                  color={category.color}
                />
              ))}
            </div>

            <div className="smart-tip">
              <h4>&#128161; Smart tip</h4>
              <p>Track every purchase for one full month. Most students discover 1&ndash;3 categories where they're spending 2&times; what they thought.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default SpendingTracker;
