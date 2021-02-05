import Auth from '../../../../server/middleware/auth';
import AuthController from '../../controllers/AuthController';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "REGISTER":
        AuthController.registerUser();
      break;
    case "LOGIN":
      break;
    default:
      break;
  }
};

export default authReducer;
