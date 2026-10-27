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
