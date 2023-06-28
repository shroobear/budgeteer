# Budgeteer

Budgeteer is a personal finance management app that helps you track your expenses, manage accounts, and gain insights into your spending habits. With Budgeteer, you can easily monitor your financial health and make informed decisions to achieve your financial goals.

## Features

- **Dashboard**: Provides an overview of your current financial status, displaying key information such as account balances, upcoming charges, and spending breakdowns.
- **Expenses**: Allows you to add, edit, and delete expenses, categorize them, and view detailed information about each expense.
- **Accounts**: Lets you manage your accounts, including adding new accounts, updating balances, and viewing transaction history for each account.
- **Spending Breakdowns**: Provides visual breakdowns of your expenses by category and account, helping you understand where your money is being spent.
- **Account Details**: Allows you to view detailed information about each account, including transaction history, balances, and expense summaries.

## Technologies Used

- React: JavaScript library for building the user interface.
- React Router: Library for handling routing within the app.
- Chart.js: Charting library for visualizing spending breakdowns.
- CSS: Styling the components and layout.
- JSON Server: Simple RESTful API for managing data.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/budgeteer.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The app will be available at `http://localhost:3000`

## Folder Structure

```
budgeteer/
  README.md
  package.json
  package-lock.json
  public/
    index.html
    budgeteerLogoBlack.png
    budgeteerLogo.png
  src/
    components/
      AccountPage.js
      Accounts.js
      AccountTable.js
      Dashboard.js
      Expenses.js
      ExpenseTable.js
      HandleNewAccount.js
      NavBar.js
      NewExpenseForm.js
      SpendingBreakdowns.js
    context/
      AppContext.js
      AppProvider.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue.

## Acknowledgements

- The Budgeteer app was inspired by personal finance management tools and aims to provide a user-friendly experience for individuals to manage their finances effectively.