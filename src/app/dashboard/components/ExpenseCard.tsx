import React from "react";
import { ExpenseCard as ExpenseCardProps } from "../../../../features/expenses/expenseSlice";

/**
 * ExpenseCard component displays information about an expense.
 * @param {Object} props - Props object containing the expense details.
 * @param {ExpenseCardProps} props.expenseCard - The expense object containing type, amount, and payments.
 * @returns {JSX.Element} - The JSX element representing the expense card component.
 */
const ExpenseCard = ({ expenseCard }: { expenseCard: ExpenseCardProps }) => {
  return (
    <div className=" flex flex-col gap-y-1 w-full  rounded-lg border-gray-300 border p-3">
      <p className="font-medium text-lg text-gray-500">
        {expenseCard.expenseType === "income" ? "Income" : "Expense"}
      </p>
      <p
        className={`font-semibold text-xl  ${
          expenseCard.expenseType === "income"
            ? "text-[#148714]"
            : "text-[#D04141]"
        }`}
      >
        {expenseCard.totalAmount} CAD
      </p>
      <p className="text-sm text-gray-500">
        {expenseCard.totalPayments} payments{" "}
        {expenseCard.expenseType === "income" ? "received" : "paid"}
      </p>
    </div>
  );
};

export default ExpenseCard;
