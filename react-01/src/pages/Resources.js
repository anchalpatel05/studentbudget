import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import AppItem from '../components/AppItem';
import DiscountCard from '../components/DiscountCard';
import GovCard from '../components/GovCard';
import MoneyWin from '../components/MoneyWin';
import './Resources.css';

// Same data as apps.json, which will be loaded from the file later
const apps = [
  { _id: 1, name: 'Mint', category: 'Budgeting', price: 'FREE', description: 'Free all-in-one budgeting, spending tracking, and bill reminders. Syncs with your bank automatically.', color: '', img_name: 'images/mint.svg' },
  { _id: 2, name: 'YNAB', category: 'Budgeting', price: 'PAID', description: '"You Need A Budget" — proactive budgeting app with a great student discount. Highly reviewed.', color: '', img_name: 'images/ynab.svg' },
  { _id: 3, name: 'Acorns', category: 'Investing', price: 'PAID', description: 'Round up purchases and invest the spare change automatically. Great way to start investing with $0.', color: 'gold', img_name: 'images/acorns.svg' },
  { _id: 4, name: 'Ally Bank', category: 'Savings', price: 'FREE', description: 'High-yield savings account with 4–5% APY. No minimums, no fees. Keep your emergency fund here.', color: 'purple', img_name: 'images/ally.svg' },
  { _id: 5, name: 'Credit Karma', category: 'Credit', price: 'FREE', description: 'Free credit score monitoring, alerts, and personalized tips. Check your score without hurting it.', color: '', img_name: 'images/creditkarma.svg' },
  { _id: 6, name: 'Venmo / Cash App', category: 'Transfers', price: 'FREE', description: 'Split bills, pay rent, and transfer money instantly. Use for splitting costs with roommates.', color: 'gold', img_name: 'images/venmo.svg' },
  { _id: 7, name: 'GasBuddy', category: 'Transportation', price: 'FREE', description: 'Find the cheapest gas stations near you. Can save $0.20–0.50 per gallon.', color: 'red', img_name: 'images/gasbuddy.svg' },
  { _id: 8, name: 'Goodbudget', category: 'Budgeting', price: 'FREE', description: 'Digital envelope budgeting — allocate money to categories at the start of the month.', color: '', img_name: 'images/goodbudget.svg' },
];

const discounts = [
  { icon: '🎵', name: 'Spotify Student', tag: '50% off', text: 'Half-price premium subscription with your .edu email. Also includes Hulu and Showtime.' },
  { icon: '🍎', name: 'Apple Music Student', tag: '50% off', text: 'Student pricing available with university verification through UNiDAYS.' },
  { icon: '📦', name: 'Amazon Prime Student', tag: '50% off', text: '6-month free trial, then half price. Free shipping, Prime Video, and free Grubhub+ for a year.' },
  { icon: '🎨', name: 'Adobe Creative Cloud', tag: '60% off', text: 'Check if your school provides it free first. Otherwise, the student plan is deeply discounted.' },
  { icon: '💻', name: 'Microsoft 365', tag: 'Free', text: "Most schools provide free Microsoft Office. Check your school's IT portal before paying." },
  { icon: '🧘', name: 'Headspace', tag: 'Free', text: 'The mental wellness app is free for students. Stress management is part of financial wellness too.' },
  { icon: '📰', name: 'New York Times', tag: 'Free', text: "Many universities offer free NYT and WSJ digital access. Check your library's digital resources." },
  { icon: '🏷️', name: 'UNiDAYS', tag: 'Various', text: 'Free app with hundreds of student discounts at popular brands — clothing, tech, food, and more.' },
];

const govResources = [
  { icon: '🎓', name: 'FAFSA', link: 'https://studentaid.gov', linkText: 'studentaid.gov', text: 'Apply for federal student aid every year. Covers grants, work-study, and low-interest loans.' },
  { icon: '📋', name: 'studentaid.gov', link: 'https://studentaid.gov', linkText: 'studentaid.gov', text: 'Manage your federal student loans, apply for repayment plans, and track your aid history.' },
  { icon: '📄', name: 'AnnualCreditReport.com', link: 'https://www.annualcreditreport.com', linkText: 'annualcreditreport.com', text: "Get your free credit report from all three bureaus once per year. Federally mandated — it's free." },
  { icon: '🛡️', name: 'Consumer Financial Protection Bureau', link: 'https://www.consumerfinance.gov', linkText: 'consumerfinance.gov', text: 'Government agency with free financial education tools, calculators, and complaint resolution.' },
  { icon: '💰', name: 'IRS Free File', link: 'https://www.irs.gov/freefile', linkText: 'irs.gov/freefile', text: "File your taxes for free if you earn under $79,000. Many students qualify. Don't pay to file." },
  { icon: '🔍', name: 'BenefitsFinder', link: 'https://www.benefits.gov', linkText: 'benefits.gov', text: 'Find government benefits you may qualify for — food assistance, housing, health insurance, and more.' },
];

const moneyWins = [
  'Eat before grocery shopping — hunger leads to impulse buys',
  'Use incognito mode when shopping online — prices can vary',
  'Buy textbooks used, rent them, or find PDFs through your library',
  'Negotiate your phone plan — carriers offer student deals not advertised',
  'Walk or bike for trips under 2 miles instead of ridesharing',
  'Cook in batches on Sundays to avoid expensive last-minute takeout',
  'Use the campus gym instead of paying for an off-campus membership',
  'Check Facebook Marketplace and Craigslist before buying furniture new',
  'Apply for every scholarship — small ones ($500–2K) go unclaimed constantly',
  'Turn off auto-renew on all subscriptions and review them quarterly',
  'Get a library card — free ebooks, audiobooks, movies, and magazines',
  'Open a high-yield savings account and put your emergency fund there',
];

function Resources() {
  return (
    <>
      <PageHero
        className="resources-hero"
        title="Resources"
        text="The best apps, student discounts, government tools, and quick tips to help you manage money smarter — all in one place."
      />

      <section className="res-section">
        <div className="res-content">
          <h2>Best Finance Apps for Students</h2>
          <p>Tested, trusted, and student-friendly.</p>
          <div className="res-list">
            {apps.map((app) => (
              <AppItem
                key={app._id}
                name={app.name}
                category={app.category}
                price={app.price}
                description={app.description}
                color={app.color}
                img_name={app.img_name}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="res-section white-section">
        <div className="res-content">
          <h2>Student Discounts Worth Using</h2>
          <p>Your .edu email is worth hundreds of dollars a year — use it.</p>
          <div className="res-list">
            {discounts.map((discount) => (
              <DiscountCard key={discount.name} icon={discount.icon} name={discount.name} tag={discount.tag} text={discount.text} />
            ))}
          </div>
        </div>
      </section>

      <section className="res-section">
        <div className="res-content">
          <h2>Government &amp; Official Resources</h2>
          <p>Free, reliable, and often overlooked by students.</p>
          <div className="res-list">
            {govResources.map((gov) => (
              <GovCard
                key={gov.name}
                icon={gov.icon}
                name={gov.name}
                link={gov.link}
                linkText={gov.linkText}
                text={gov.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="money-section">
        <h2>12 Quick Money Wins</h2>
        <p>Pick three and start this week.</p>
        <div className="money-list">
          {moneyWins.map((win, index) => (
            <MoneyWin key={win} number={index + 1} text={win} />
          ))}
        </div>
      </section>

      <section className="together-section">
        <h2>Ready to put it all together?</h2>
        <p>Use our interactive tools to build your budget, track spending, and hit your savings goals.</p>
        <div className="together-actions">
          <Link className="button button-dark" to="/budget-planner">Budget Planner &rarr;</Link>
          <Link className="button button-red" to="/spending-tracker">Spending Tracker &rarr;</Link>
          <Link className="button button-gold" to="/savings-goals">Savings Goals &rarr;</Link>
        </div>
      </section>
    </>
  );
}

export default Resources;
