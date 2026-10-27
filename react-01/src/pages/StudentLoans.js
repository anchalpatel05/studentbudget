import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import LoanCard from '../components/LoanCard';
import Plan from '../components/Plan';
import Trap from '../components/Trap';
import './StudentLoans.css';

const loans = [
  { icon: '✅', title: 'Direct Subsidized Loans', rate: '5.50%', forWho: 'Undergrads with financial need', items: ["Gov't pays interest while in school", '6-month grace period after graduation', 'Lower interest rates', 'Income-driven repayment options'], color: 'budget', best: true },
  { icon: '⚠️', title: 'Direct Unsubsidized Loans', rate: '5.50%', forWho: 'All students regardless of need', items: ['Interest accrues from day one', '6-month grace period after graduation', 'Same repayment options as subsidized', 'Can capitalize unpaid interest'], color: 'savings' },
  { icon: '⚡', title: 'PLUS Loans (Parent/Grad)', rate: '8.05%', forWho: 'Parents or grad students', items: ['Highest federal loan interest rate', 'No grace period', 'Credit check required', 'Borrow up to full cost of attendance'], color: 'spending' },
  { icon: '🚫', title: 'Private Student Loans', rate: '4–15%+', forWho: 'Students needing more funds', items: ['Variable or fixed rates — often higher', 'No income-driven repayment', 'No federal forgiveness programs'], color: 'spending' },
];

const plans = [
  { years: '10 years', title: 'Standard Repayment', text: 'Fixed payments. Pay the least interest overall. Best if you can afford the monthly payment.' },
  { years: '10 years', title: 'Graduated Repayment', text: 'Payments start low and increase every 2 years. Good if you expect income to grow.' },
  { years: '20–25 years', title: 'Income-Based (IBR)', text: 'Payments capped at 10–15% of discretionary income. Remaining balance forgiven after term.' },
  { years: '20–25 years', title: 'SAVE Plan', text: "Newest IDR plan. Payments as low as 5% of discretionary income. Gov't covers unpaid interest." },
  { years: '10 years', title: 'Public Service Forgiveness', text: "Work for gov't or non-profit. After 120 qualifying payments, remaining balance forgiven tax-free." },
];

const traps = [
  'Making only minimum payments on credit cards (interest compounds fast)',
  'Taking out private loans before maxing federal aid options',
  'Borrowing more than your expected first-year salary',
  "Using credit cards to cover everyday expenses you can't pay off monthly",
  'Co-signing loans without understanding the risk',
  'Ignoring your loan servicer emails and missing repayment deadlines',
];

function StudentLoans() {
  return (
    <>
      <PageHero
        className="loans-hero"
        title={<><em>Student Loans</em> &amp; Credit</>}
        text="Understand your loans before you sign. Learn how credit scores work, and avoid the debt traps that follow students for years."
      >
        <Link className="button button-dark" to="/student-loans">&#127891; Student Loans</Link>
        <Link className="button button-outline" to="/student-loans">&#128179; Credit Scores</Link>
        <Link className="button button-outline" to="/student-loans">&#129518; Loan Calculator</Link>
      </PageHero>

      <section className="loans-section">
        <h2>Types of Student Loans</h2>
        <p>Always exhaust federal options before considering private loans.</p>
        <div className="loan-list">
          {loans.map((loan) => (
            <LoanCard
              key={loan.title}
              icon={loan.icon}
              title={loan.title}
              rate={loan.rate}
              forWho={loan.forWho}
              items={loan.items}
              color={loan.color}
              best={loan.best}
            />
          ))}
        </div>
      </section>

      <section className="plans-section">
        <h2>Repayment Plans Explained</h2>
        <p>Federal loans come with flexible options. Know them before you graduate.</p>
        <div className="plan-list">
          {plans.map((plan) => (
            <Plan key={plan.title} years={plan.years} title={plan.title} text={plan.text} />
          ))}
        </div>
      </section>

      <section className="traps-section">
        <div className="traps-content">
          <h2>Debt Traps to Avoid</h2>
          {traps.map((trap) => (
            <Trap key={trap} text={trap} />
          ))}
        </div>
      </section>
    </>
  );
}

export default StudentLoans;
