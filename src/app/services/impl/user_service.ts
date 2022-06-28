import { IUserService } from '../i_user_service';
export class UserService implements IUserService {
  getUser(): unknown {
    return { name: 'Marco' };
  }
}
