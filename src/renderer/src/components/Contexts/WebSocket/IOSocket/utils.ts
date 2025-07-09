import { TokenManager } from '@renderer/components/Contexts/Auth/AuthContext';
import BaseService, { ioServiceAxios } from '@renderer/services/base';

type SessionTokenResponse = {
  session_token: string;
};

export const getSessionToken = async (tokenManager: TokenManager): Promise<string> => {
  const response = await new BaseService(ioServiceAxios, tokenManager).post<SessionTokenResponse>(
    '/ws-session',
    {}
  );
  return response.data.session_token;
};
