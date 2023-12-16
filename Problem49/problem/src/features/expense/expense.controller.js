import ExpenseModel from "./expense.model.js";
import ExpenseRepository from "./expense.repository.js";

export default class ExpenseController {
  constructor() {
    this.expenseRepository = new ExpenseRepository();
  }

  // Create new expense
  add = async (req, res) => {
    try {
      const {title , amount , date , isRecurring , tags} = req.body;
      const expense = new ExpenseModel(title , parseFloat(amount) , date , isRecurring , tags);
      const createdExpense = await this.expenseRepository.addExpense(expense);
      res.status(201).send(createdExpense);
    } catch (err) {
      console.log(err)
    }
  };

  // Get a specific expense
  getOne = async (req, res) => {
    try{
      const id = req.params._id;
      const expense = await this.expenseRepository.getOne(id);
      if (!expense) {
        res.status(404).send('Expense not found');
      } else {
        return res.status(200).send(expense);
      }
    } catch(err){
    console.log(err);
    return res.status(200).send("Something went wrong");
  }
  };

  // Get all expenses
  getAll = async (req, res) => {
    try{
      const expense = await this.expenseRepository.getAllExpenses();
    res.status(200).send(expense);
    } catch(err){
    console.log(err);
    return res.status(200).send("Something went wrong");
   }    
  };

  // Add a tag to an expense
  addTag = async (req, res) => {
    try{
      const userID = req._id;
      const tag = req.query.tag;
      this.expenseRepository.addTagToExpense(
        userID, 
        tag
        );
        return res
          .status(200)
          .send('Rating has been added');
    } catch(err){
      console.log(err);
      console.log("Passing error to middleware");
      next(err);
    }
  };

  // Filter expenses based on given criteria
  filter = async (req, res) => {
    try {
    const category = req.query.category;
    const result = await this.expenseRepository.filter(
      category
    );
    res.status(200).send(result);
    }catch(err){
      console.log(err);
      return res.status(200).send("Something went wrong");
    }

  };
}
