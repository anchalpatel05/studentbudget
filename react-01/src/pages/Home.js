import { Link } from 'react-router-dom';
import Fact from '../components/Fact';
import ToolCard from '../components/ToolCard';
import TopicTag from '../components/TopicTag';
import CheckItem from '../components/CheckItem';
import BudgetCheck from '../components/BudgetCheck';
import LifeCard from '../components/LifeCard';
import AppCard from '../components/AppCard';
import WinCard from '../components/WinCard';
import './Home.css';

const facts = [
  { number: '73%', text: 'of students worry about money' },
  { number: '$2,100', text: 'average monthly student spending' },
  { number: '50%', text: 'feel financially unprepared' },
  { number: '$0', text: 'cost to use this site' },
];

const tools = [
  { icon: 'fa-chart-column', title: 'Budget Planner', text: 'Learn the 50/30/20 rule and build your monthly budget with our interactive calculator.', path: '/budget-planner', color: 'budget' },
  { icon: 'fa-credit-card', title: 'Spending Tracker', text: 'Log your daily purchases and see where your money is actually going each month.', path: '/spending-tracker', color: 'spending' },
  { icon: 'fa-bullseye', title: 'Savings Goals', text: 'Set a goal, track your progress, and build the habit of saving even on a tight budget.', path: '/savings-goals', color: 'savings' },
  { icon: 'fa-graduation-cap', title: 'Student Loans & Credit', text: 'Understand your loans, credit score, and how to avoid debt traps while in school.', path: '/student-loans', color: 'loans' },
  { icon: 'fa-book', title: 'Resources', text: 'Apps, tools, guides, and student discounts to help you manage money smarter.', path: '/resources', color: 'resources' },
];

const topics = ['Budgeting Basics', 'Spending Habits', 'Savings Goals', 'Loan Guidance'];

const checks = [
  'Learn the 50/30/20 rule',
  'Set spending targets by category',
  'See your annualized savings',
  'Get a budget health grade',
];

const lifeCards = [
  { label: 'Food on a Budget', labelColor: 'gold', title: 'Eat well without going broke', text: 'Meal prepping, smart grocery shopping, and knowing when to use the dining hall can save $150–200/month.', image: 'cooking.jpeg', buttonText: 'Budget Planner', path: '/budget-planner' },
  { label: 'Savings Goals', labelColor: 'purple', title: 'Small savings, big results', text: '$25/week adds up to $1,300/year. Set a goal, track it visually, and watch it grow faster than you expect.', image: 'piggybank.jpeg', buttonText: 'Set a Savings Goal', path: '/savings-goals' },
];

const apps = [
  { icon: '🌿', name: 'Mint', tag: 'Free', text: 'Auto-sync budgeting and spending insights.' },
  { icon: '📈', name: 'Credit Karma', tag: 'Free', text: 'Track your credit score with no impact.' },
  { icon: '🌰', name: 'Acorns', tag: 'Investing', text: 'Round up purchases and invest spare change.' },
  { icon: '📦', name: 'Amazon Prime Student', tag: '50% off', text: 'Free shipping + Prime Video at half price.' },
  { icon: '🎵', name: 'Spotify Student', tag: '50% off', text: 'Includes Hulu — half price with .edu email.' },
  { icon: '🏦', name: 'Ally Bank HYSA', tag: '4–5% APY', text: 'High-yield savings with no minimums or fees.' },
];

const wins = [
  { icon: '☕', text: 'Make coffee at home — saves $80+/month vs. daily café runs' },
  { icon: '📋', text: 'Cancel one subscription you forgot about' },
  { icon: '🛒', text: 'Buy store-brand groceries this week — same quality, 30% cheaper' },
  { icon: '💰', text: 'Move $25 to a savings account right now' },
  { icon: '🏷', text: 'Check UNiDAYS for student discounts before any online purchase' },
  { icon: '🍱', text: 'Pack lunch 3 days this week instead of buying' },
];

function Home() {
  return (
    <>
      <main className="hero">
        <p className="hero-label">Free for every student</p>
        <h1>Stop stressing about money. Start thriving.</h1>
        <p className="intro">My Student Finance gives you budgeting tools, a spending tracker, savings planner, and loan guides — everything you need to manage money like a pro on a student budget.</p>
        <div className="hero-actions">
          <Link className="button button-primary" to="/budget-planner">Start Budget Planner &rarr;</Link>
          <Link className="button" to="/spending-tracker">Track My Spending</Link>
        </div>
      </main>

      <section className="facts">
        {facts.map((fact) => (
          <Fact key={fact.number + fact.text} number={fact.number} text={fact.text} />
        ))}
      </section>

      <section className="tools-section">
        <h2>Five tools, one place</h2>
        <p>Everything you need to take control of your student finances.</p>
        <div className="tool-list">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              icon={tool.icon}
              title={tool.title}
              text={tool.text}
              path={tool.path}
              color={tool.color}
            />
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="why-content">
          <img className="why-image" src={`${process.env.PUBLIC_URL}/images/image1.jpeg`} alt="Student working on a laptop" />
          <div className="why-text">
            <p className="why-label">Why it matters</p>
            <h2>College is expensive.<br /><em>Your finances don't have to be confusing.</em></h2>
            <p>Between tuition, rent, groceries, and social life, managing money in college feels overwhelming. Most students have never been taught basic budgeting — and it shows.</p>
            <p>This site breaks it all down into clear, practical tools. No finance degree required — just your monthly numbers and five minutes.</p>
            <div className="topic-list">
              {topics.map((topic) => (
                <TopicTag key={topic} name={topic} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="budget-section">
        <div className="budget-content">
          <div className="budget-text">
            <p className="budget-label">Budget Planner Preview</p>
            <h2>Know where every dollar goes</h2>
            <p className="budget-intro">Enter your income and a few key expenses below for a quick snapshot. Head to the full Budget Planner for a detailed breakdown with the 50/30/20 rule.</p>
            <ul className="check-list">
              {checks.map((check) => (
                <CheckItem key={check} text={check} />
              ))}
            </ul>
            <Link className="button button-primary" to="/budget-planner">Open Full Budget Planner &rarr;</Link>
          </div>
          <BudgetCheck />
        </div>
      </section>

      <section className="life-section">
        <h2>Every part of student life, covered</h2>
        <p>From what you eat to what you save — we help you make smarter choices across the board.</p>
        <div className="life-list">
          {lifeCards.map((card) => (
            <LifeCard
              key={card.title}
              label={card.label}
              labelColor={card.labelColor}
              title={card.title}
              text={card.text}
              image={card.image}
              buttonText={card.buttonText}
              path={card.path}
            />
          ))}
        </div>
      </section>

      <section className="apps-section">
        <div className="apps-header">
          <div>
            <h2>Top Apps &amp; Discounts</h2>
            <p>Tools and deals every student should know about — most of them free.</p>
          </div>
          <Link className="button button-dark" to="/resources">View All Resources &rarr;</Link>
        </div>
        <div className="apps-list">
          {apps.map((app) => (
            <AppCard key={app.name} icon={app.icon} name={app.name} tag={app.tag} text={app.text} />
          ))}
        </div>
      </section>

      <section className="wins-section">
        <h2>Quick wins for this week</h2>
        <p>Pick two and start today.</p>
        <div className="wins-list">
          {wins.map((win) => (
            <WinCard key={win.text} icon={win.icon} text={win.text} />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <p className="cta-icon">🎯</p>
          <h2>Ready to take control?</h2>
          <p className="cta-text">Start with the Budget Planner — plug in your real numbers and get a personalized monthly budget in under 5 minutes.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/budget-planner">Budget Planner &rarr;</Link>
            <Link className="button" to="/spending-tracker">Spending Tracker &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
