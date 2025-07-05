import { LoginCredentials } from '@renderer/components/Contexts/Auth';

const authServiceUrl = window.appEnvs.mistAuthServiceUrl;

class AuthService {
  public async login(creds: LoginCredentials): Promise<Response> {
    const url = `${authServiceUrl}/api/token/`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: creds.username,
        password: creds.password
      })
    });

    return await response;
  }
}

export default AuthService;
