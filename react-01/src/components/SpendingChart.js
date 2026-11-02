import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import './SpendingChart.css';

const colors = {
  green: '#176f4e',
  gold: '#bd860e',
  purple: '#7547a3',
  red: '#c84c3a',
};

// Donut chart of spending by category, made with the Recharts library
function SpendingChart({ categories }) {
  const data = categories.map((category) => ({
    name: category.name,
    value: Number(category.amount.replace(/[$,]/g, '')),
    color: colors[category.color || 'green'],
  }));

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="spending-chart">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={60} outerRadius={95} paddingAngle={3}>
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-total">
        <p>Total</p>
        <h4>${total.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default SpendingChart;
