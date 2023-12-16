// Please don't change the pre-written code
// Import the necessary modules here

const basicAuthMiddleware = () => {
  // Write your code here
  const authHeader = req.headers["authorization"];

  if(!authHeader){
      return res.status(401).send("No authorization details found");
  }
  // console.log(authHeader);
  // 2. Extract credentials. [Basic qwertyusdfghj345678cvdfgh]
  const base64Credentials = authHeader.replace('Basic ','');
  // console.log(base64Credentials);
  // 3. decode crdentials.

  const decodedCreds = Buffer.from(base64Credentials, 'base64').toString('utf8')
  // console.log(decodedCreds); // [username:password]
  const creds = decodedCreds.split(':');

  const user = UserModel.getAll().find(u=> u.email==creds[0] && u.password==creds[1]);
  if(user){
      next();
  }
  else{
      return res.status(401).send("Incorrect Credentials");
  }
};

export default basicAuthMiddleware;
