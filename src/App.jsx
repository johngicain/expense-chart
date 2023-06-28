// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

const Expenses = [
  {
    id: 1,
    day: "mon",
    amount: 17.45,
  },
  {
    id: 2,
    day: "tue",
    amount: 34.91,
  },
  {
    id: 3,
    day: "wed",
    // amount: 52.36,
    amount: 22.36,
  },
  {
    id: 4,
    day: "thu",
    amount: 31.07,
  },
  {
    id: 5,
    day: "fri",
    amount: 23.39,
  },
  {
    id: 6,
    day: "sat",
    amount: 43.28,
  },
  {
    id: 7,
    day: "sun",
    amount: 25.48,
  },
];

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Balance />
      <Chart expensesData={Expenses} />
      <Total expensesData={Expenses} />
    </>
  );
}

export default App;

function Balance() {
  return (
    <div className="mb-6 rounded-xl bg-[#EC755D] px-6 py-4 text-left text-white">
      <span className="text-sm font-light">My balance</span>
      <p className="text-2xl font-semibold">$921.48</p>
    </div>
  );
}

function Chart({ expensesData }) {
  return (
    <div className="w-auto rounded-tl-xl rounded-tr-xl bg-[#FFFBF6] px-8 pt-8 text-left text-[#382314]">
      <h2 className="mb-4 text-2xl font-semibold">Spending - Last 7 days</h2>
      <ul className="flex h-80 w-full flex-row border-b border-solid border-[#F8E9DD] pb-6">
        {expensesData.map((expense) => (
          <Day expense={expense} />
        ))}
      </ul>
    </div>
  );
}

function Day({ expense }) {
  const balance = 500;
  const expenseBar = (expense.amount * balance) / 100;

  const date = new Date();
  const day = date.getDay();
  // let year = date.getFullYear();
  // let month = date.getMonth();

  return (
    <>
      <li
        className="group flex cursor-pointer flex-col justify-end text-center  text-xs text-[#92857A]"
        key={expense.id}
      >
        <span className="mb-2 hidden rounded bg-[#382314] px-1 py-2 text-white group-hover:block">
          ${expense.amount}
        </span>
        <div
          className={
            day === expense.id
              ? "mx-2 mb-2 w-10 rounded bg-[#76B5BC] group-hover:bg-[#B4E0E5]"
              : "mx-2 mb-2 w-10 rounded bg-[#EC755D] group-hover:bg-[#FF9B86]"
          }
          style={{
            height: expenseBar + "px",
          }}
        ></div>
        {expense.day}
      </li>
    </>
  );
}

// pageAllBooks;

function Total({ expensesData }) {
  const totalValue = expensesData.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <div className="w-auto rounded-bl-xl rounded-br-xl bg-[#FFFBF6] p-8 text-left text-[#382314]">
      <span className="mb-1 text-sm font-light">Total this month</span>
      <p className="text-4xl font-bold">${totalValue}</p>
    </div>
  );
}
