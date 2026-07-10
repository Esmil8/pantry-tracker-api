import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, ArrowRight } from 'lucide-react';
import { authService } from '@/services/auth.service';
import { useAuthStore } from '@/store/auth.store';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { toast } from 'sonner';

const loginSchema = z.object({
  Email: z.string().email('Email inválido'),
  Password: z.string().min(6, 'Mínimo 6 caracteres'),
});
type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const setAuth = useAuthStore((s) => s.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await authService.login(data);
      setAuth(res.Data.user, res.Data.token);
      navigate('/', { replace: true });
    } catch (err: any) {
      const msg =
        err.response?.data?.Message ??
        err.response?.data?.message ??
        'Credenciales incorrectas';
      toast.error(msg);
    }
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-ink mb-4">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Pantry Tracker</h1>
          <p className="text-sm text-mute mt-1">Inicia sesión en tu cuenta</p>
        </div>

        {/* Card */}
        <div className="geist-card p-6">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
              required
              error={errors.Email?.message}
              {...register('Email')}
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              error={errors.Password?.message}
              {...register('Password')}
            />

            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full mt-1"
              id="login-submit-btn"
            >
              Iniciar sesión
            </Button>
          </form>
        </div>

        {/* Register link */}
        <p className="text-center text-sm text-mute mt-6">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-ink font-medium hover:text-link transition-colors">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}
