// const checkedValid_data = (email,password) => {

//    const isemailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
//    const ispasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

//    if(!isemailValid) return {iserrorValid:"Email ID is not valid"};
//    if(!ispasswordvalid) return {iserrorValid:"Password is not valid"};

//    return {};

// }

// export default checkedValid_data;

const checkedValid_data = {

   email:[
      {required:true,message:"Please enter your email"},
      {
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Email ID is not valid"
      }
   ],

   password:[
      {required:true,message:"Please enter your password"},
      {
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      message: "Password must be 8+ chars, include uppercase, lowercase and number"
      }
   ]
};

export default checkedValid_data;