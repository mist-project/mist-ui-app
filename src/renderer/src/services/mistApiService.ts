import { LoginCredentials } from '@renderer/components/Auth';

const baseUrl = window.appEnvs.mistApiServiceUrl;
class MistApiService {
  public async login(creds: LoginCredentials): Promise<Response> {
    const url = `${baseUrl}/api/token/`;
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

export default MistApiService;
