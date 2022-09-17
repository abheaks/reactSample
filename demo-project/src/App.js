import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "CarInsurance",
      expenseAmount: 294.39,
    },
    {
      expenseDate: new Date(2021, 3, 28),
      expenseTitle: "Hospital",
      expenseAmount: 24.39,
    },
    {
      expenseDate: new Date(2021, 3, 28),
      expenseTitle: "Painiting",
      expenseAmount: 424.39,
    },
  ];

  return (
    <div className="App">
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
