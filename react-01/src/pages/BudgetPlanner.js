import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import RuleCard from '../components/RuleCard';
import SampleRow from '../components/SampleRow';
import CompareCard from '../components/CompareCard';
import Step from '../components/Step';
import './BudgetPlanner.css';

const rules = [
  { percent: '50%', title: 'Needs', text: "The essentials you can't skip — the bills that keep a roof over your head and food on the table.", items: ['Rent & utilities', 'Groceries', 'Transportation', 'Phone bill'], color: 'budget' },
  { percent: '30%', title: 'Wants', text: 'The fun stuff that makes college life enjoyable — just keep it within your limit.', items: ['Dining out', 'Streaming subscriptions', 'Concerts & events', 'Shopping'], color: 'spending' },
  { percent: '20%', title: 'Savings', text: 'Pay your future self first — even small amounts add up fast.', items: ['Emergency fund', 'Savings goals', 'Extra loan payments', 'Investing'], color: 'loans' },
];

const sampleRows = [
  { label: 'Monthly Income', amount: '+$1,800', color: 'budget' },
  { label: '− Needs (50%)', amount: '−$900', color: 'spending' },
  { label: '− Wants (30%)', amount: '−$540', color: 'savings' },
  { label: '= Savings (20%)', amount: '$360', color: 'loans', total: true },
];

const compares = [
  { title: 'Needs ✅', items: ['Rent & utilities', 'Groceries (basic)', 'Bus pass / gas', 'Textbooks (required)', 'Health insurance', 'Medications'], color: 'budget' },
  { title: 'Wants ⚡', items: ['Daily Starbucks', 'Dining out often', 'New clothes (non-essential)', 'Gaming / apps', 'Concerts & events', 'Multiple streaming services'], color: 'savings' },
];

const steps = [
  { number: '01', title: 'Know your income', text: 'Add every source: part-time job, financial aid, parental help. Use your take-home (after-tax) number.' },
  { number: '02', title: 'List fixed expenses', text: 'Costs that stay the same every month — rent, phone bill, subscriptions, loan payments.' },
  { number: '03', title: 'Track variable spending', text: "For one month, log every purchase. You'll discover exactly where money leaks without noticing." },
  { number: '04', title: 'Apply the 50/30/20 rule', text: 'Allocate 50% to needs, 30% to wants, 20% to savings. Adjust to fit your actual life.' },
  { number: '05', title: 'Review every Sunday', text: '5 minutes to check in. On track? Great. Overspent? Adjust before it snowballs.' },
];

function BudgetPlanner() {
  return (
    <>
      <PageHero
        className="planner-hero"
        title={<><em>Budget</em> Planner</>}
        text="Learn budgeting fundamentals, then plug in your real numbers to build a personalized monthly budget."
      >
        <Link className="button button-dark" to="/budget-planner">&#128218; Learn the Basics</Link>
        <Link className="button button-outline" to="/budget-planner">&#129518; Build My Budget</Link>
      </PageHero>

      <section className="rule-section">
        <h2>The 50/30/20 Rule</h2>
        <p>The most popular beginner budgeting framework. Simple, flexible, and effective.</p>
        <div className="rule-list">
          {rules.map((rule) => (
            <RuleCard
              key={rule.title}
              percent={rule.percent}
              title={rule.title}
              text={rule.text}
              items={rule.items}
              color={rule.color}
            />
          ))}
        </div>
      </section>

      <section className="basics-section">
        <div className="basics-content">
          <div className="basics-text">
            <h2>What is a budget?</h2>
            <p>A budget is simply a plan for how you'll spend your money each month. It tells your money where to go — instead of wondering where it went.</p>
            <p>You just need to know: <strong>how much comes in</strong> and <strong>how much goes out</strong>.</p>
            <p className="tip"><strong>Quick tip:</strong> If income &gt; expenses, that's your savings. If expenses &gt; income, that's a deficit — fix it before it compounds.</p>
          </div>

          <div className="sample-budget">
            <h3>Sample Budget — $1,800/mo</h3>
            {sampleRows.map((row) => (
              <SampleRow key={row.label} label={row.label} amount={row.amount} color={row.color} total={row.total} />
            ))}
          </div>
        </div>
      </section>

      <section className="compare-section">
        <h2>Needs vs. Wants</h2>
        <p>The most important distinction in budgeting. Be honest with yourself.</p>
        <div className="compare-list">
          {compares.map((compare) => (
            <CompareCard key={compare.title} title={compare.title} items={compare.items} color={compare.color} />
          ))}
        </div>
      </section>

      <section className="steps-section">
        <h2>5 Steps to Your First Budget</h2>
        <p>Thirty minutes. Life-changing results.</p>
        <div className="step-list">
          {steps.map((step) => (
            <Step key={step.number} number={step.number} title={step.title} text={step.text} />
          ))}
        </div>
      </section>

      <section className="build-section">
        <Link className="button button-dark" to="/budget-planner">Now build your budget &rarr;</Link>
      </section>
    </>
  );
}

export default BudgetPlanner;
