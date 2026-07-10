import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { ChefHat, ArrowRight } from 'lucide-react';
import { authService } from '@/services/auth.service';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { toast } from 'sonner';

const registerSchema = z
  .object({
    Name: z.string().min(3, 'Mínimo 3 caracteres'),
    LastName: z.string().min(3, 'Mínimo 3 caracteres'),
    Email: z.string().email('Email inválido'),
    Password: z.string().min(6, 'Mínimo 6 caracteres'),
    ConfirmPassword: z.string().min(6, 'Mínimo 6 caracteres'),
  })
  .refine((d) => d.Password === d.ConfirmPassword, {
    message: 'Las contraseñas no coinciden',
    path: ['ConfirmPassword'],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterForm) => {
    try {
      await authService.register(data);
      toast.success('¡Cuenta creada! Inicia sesión.');
      navigate('/login');
    } catch (err: any) {
      const msg = err.response?.data?.Message ?? err.response?.data?.message ?? 'Error al registrarse';
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
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Crear cuenta</h1>
          <p className="text-sm text-mute mt-1">Únete a Pantry Tracker hoy</p>
        </div>

        {/* Card */}
        <div className="geist-card p-6">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Nombre"
                placeholder="Juan"
                required
                error={errors.Name?.message}
                {...register('Name')}
              />
              <Input
                label="Apellido"
                placeholder="García"
                required
                error={errors.LastName?.message}
                {...register('LastName')}
              />
            </div>
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
              required
              error={errors.Password?.message}
              {...register('Password')}
            />
            <Input
              label="Confirmar contraseña"
              type="password"
              placeholder="••••••••"
              required
              error={errors.ConfirmPassword?.message}
              {...register('ConfirmPassword')}
            />

            <Button
              type="submit"
              variant="primary"
              loading={isSubmitting}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full mt-1"
              id="register-submit-btn"
            >
              Crear cuenta
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-mute mt-6">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-ink font-medium hover:text-link transition-colors">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
