// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from "express-validator";

export const formValidation = async (req, res, next) => {
  // Write your code here
  const rules = [
    body('name')
      .notEmpty()
      .withMessage('Name is required'),
    body('email')
      .isEmail()
      .withMessage(
        'Enter Valid email'
      )
    // body('imageUrl')
    //   .isURL()
    //   .withMessage('Invalid url'),
  ];

    // 2. run those rules.
    await Promise.all(rules.map((rule) => {return rule.run(req)}));

    // 3. check if there are any errors after running the rules.
    var user = validationResult(req);

     // 4. if succesful, return the error message
     if (!user.isEmpty()) {
      return res.render('upload-form', {user:validationErrors.array()[0].msg,
      });
    }
    next();
};

