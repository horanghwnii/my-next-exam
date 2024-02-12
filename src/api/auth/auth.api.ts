import { AxiosInstance } from 'axios';
import { LogInDto, SignUpDto } from './auth.dto';
import { LogInData, SignUpData } from './auth.response';

class AuthAPI {
  private coreAuthClient: AxiosInstance;

  constructor(coreAuthClient: AxiosInstance) {
    this.coreAuthClient = coreAuthClient;
  }

  logIn = async (dto: LogInDto) => {
    const url = '/auth/log-in';
    const response = await this.coreAuthClient.post<LogInData>(url, dto);
    const data = response.data;

    return data;
  };

  signUp = async (dto: SignUpDto) => {
    const url = '/auth/sign-up';
    const response = await this.coreAuthClient.post<SignUpData>(url, dto);
    const data = response.data;

    return data;
  };
}

export default AuthAPI;
