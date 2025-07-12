import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@renderer/components/common/Button';
import { Checkbox } from '@renderer/components/common/Checkbox';
import { InputText } from '@renderer/components/common/Input';
import { TextLink } from '@renderer/components/common/TextLink';
import { useAuth } from '@renderer/components/Contexts/Auth';
import { EyeIcon, EyeSlashIcon } from '@renderer/icons';
import { JSX, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const LoginSchema = z.object({
  username: z
    .string()
    .email({ message: 'Must be a valid email' })
    .nonempty({ message: 'Username is required' }),
  password: z.string().min(3, { message: 'Password must be at least 3 characters' })
});

// 2. Infer TypeScript type from schema
type LoginData = z.infer<typeof LoginSchema>;

const Login = (): JSX.Element => {
  const { logged, login } = useAuth();
  const navigate = useNavigate();
  const [loggingError, setLoggingError] = useState<boolean>(false);

  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onBlur'
  });

  const getSetRememberUsername = useCallback(async (): Promise<void> => {
    const userName = await window.api.getRememberUsername();

    if (userName) {
      setValue('username', userName);
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (logged) {
      navigate('/', { replace: true }); // Replace to prevent going back to login page
    }

    getSetRememberUsername();
  }, [logged]); // Run effect whenever "logged" changes

  useEffect(() => {
    getSetRememberUsername();
  }, []);

  const onSubmit = async (data: LoginData): Promise<void> => {
    if (rememberMe) {
      window.electron.ipcRenderer.send('store-remember-username', data.username);
    } else {
      window.electron.ipcRenderer.send('delete-remember-username');
    }
    if (!(await login({ username: data.username, password: data.password }))) {
      // Handle login failure, e.g. show an error message
      setLoggingError(true);
    }
    // e.g. await api.login(data);
  };

  return (
    <>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>

      {/* Main login container */}
      <div className="bg-gray-800 rounded-xl p-16 w-full max-w-xl shadow-2xl border border-gray-700 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">Mist</h1>
        </div>

        <form className="space-y-6" id="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <InputText
              label="Username/Email"
              type="text"
              {...register('username')}
              placeholder="user@domain.com"
              className="p-4"
              errors={errors.username?.message}
            />
          </div>

          <div className="relative">
            <InputText
              label="Password"
              type={togglePassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="Enter your password"
              className="p-4"
              errors={errors.password?.message}
            />
            <Button
              type="button"
              internalType="icon"
              buttonColor="none"
              // This is a complete hack, i don't like it
              className={`absolute transform top-1/2 right-3 ${errors.password?.message ? '-' : ''}translate-y-1/4`}
              onClick={() => setTogglePassword(!togglePassword)}
            >
              {togglePassword ? <EyeSlashIcon /> : <EyeIcon />}
            </Button>
          </div>
          {loggingError && (
            // TODO: update this error handling to allow notifying errors attempting to communicate
            // with server
            <p role="alert" className="mt-2 text-sm flex gap-1 text-red-600 items-center">
              Invalid username or password.
            </p>
          )}

          <div className="flex justify-between items-center">
            <Checkbox label="Remember Me" value={rememberMe} setValue={setRememberMe} />
            <TextLink url="#">Forgot password?</TextLink>
          </div>

          <Button
            className="w-full"
            internalType="button"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            <p className="text-2xl">Log in</p>
          </Button>
        </form>

        {logged && <h2>logged</h2>}
      </div>
    </>
  );
};

export default Login;
