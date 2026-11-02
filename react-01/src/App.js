/*
  Project Part 10 - where each new feature is:

  1. JS toggle menu: components/Header.js, components/MenuIcon.js, components/NavMenu.js
     (tap the hamburger on mobile to open/close the nav; it animates into an X)
  2. Slideshow (coded from scratch, no library): components/Slideshow.js + components/Slide.js
     -> Home page, "Student money tips" section (arrows, dots, auto-play that pauses on hover)
  3. Working contact form (Web3Forms, stays on the page): components/ContactForm.js + components/FormField.js
     -> Resources page, "Get Help" section
  4. IFrame (Google Map): components/MapCard.js -> Resources page, "Get Help" section
  5. React library #1 - Recharts: components/SpendingChart.js
     -> Spending Tracker page, "Spending by Category" donut chart
  6. React library #2 - React Hot Toast: <Toaster /> in components/Layout.js
     -> toasts when the contact form sends/fails (Resources), "+ Add Expense" (Spending Tracker)
        and "+ New Savings Goal" (Savings Goals)
*/
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BudgetPlanner from './pages/BudgetPlanner';
import SpendingTracker from './pages/SpendingTracker';
import SavingsGoals from './pages/SavingsGoals';
import StudentLoans from './pages/StudentLoans';
import Resources from './pages/Resources';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="budget-planner" element={<BudgetPlanner />} />
        <Route path="spending-tracker" element={<SpendingTracker />} />
        <Route path="savings-goals" element={<SavingsGoals />} />
        <Route path="student-loans" element={<StudentLoans />} />
        <Route path="resources" element={<Resources />} />
      </Route>
    </Routes>
  );
}

export default App;
