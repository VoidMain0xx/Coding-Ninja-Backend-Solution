// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  const {title, description , image} = req.body;
  title.trim() ;
  description.trim();
  image.trim();
  let errors = [];
  if(!title){
      errors.push('enter a valid Tittle')
  }
  if(title.length < 3 ){
    errors.push("tittle should contain atleast three charaters")
  }
  if(!description){
    errors.push('description should not be empty');
  }
  if(description.length < 10){
    errors.push('descriptions sholud at least contain 10 characters')
  }
  try {
      new URL(image)
  } catch (err) {
    errors.push ('enter a valid url');
  }

  if(errors.length > 0){
    res.status(401).render("addBlog" , {errors , success: false});
  }


  res.status(201).render("addBlog", { errors: null, success: true });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
