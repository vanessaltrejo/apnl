const GoogleIcon = () => (
  <svg className="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 8.84C34.553 4.806 29.658 2 24 2C11.854 2 2 11.854 2 24s9.854 22 22 22s22-9.854 22-22c0-1.341-.138-2.65-.389-3.917z" />
    <path fill="#FF3D00" d="M6.306 14.691c-1.229 2.516-1.921 5.311-1.921 8.309c0 3.003.696 5.804 1.932 8.322L10.832 36.463C8.442 32.656 7 28.463 7 24c0-4.458 1.438-8.642 3.824-12.445L6.306 14.691z" />
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192L38.804 33.16C34.553 37.194 29.658 40 24 40c-4.444 0-8.628-1.438-12.42-3.824L6.306 31.319C10.14 39.063 16.63 44 24 44z" />
    <path fill="#1976D2" d="M43.611 20.083L43.595 20L42 20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8L24 36l.005-.005L24 36c-4.444 0-8.628-1.438-12.42-3.824L6.306 31.319C10.14 39.063 16.63 44 24 44c5.166 0 9.86-1.977 13.409-5.192L38.804 33.16C34.553 37.194 29.658 40 24 40c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 8.84C34.553 4.806 29.658 2 24 2C11.854 2 2 11.854 2 24s9.854 22 22 22s22-9.854 22-22c0-1.341-.138-2.65-.389-3.917z" />
  </svg>
);

const LoginForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm">
      <h2 className="text-3xl font-bold text-center text-dark-blue mb-8">Iniciar Sesión</h2>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
            placeholder="tu@correo.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input 
            type="password" 
            id="password" 
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-end">
          <a href="#" className="text-sm text-primary-blue hover:underline">
            Olvidé mi contraseña
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <button className="w-full py-3 px-4 bg-primary-blue text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 transition-colors">
          Iniciar Sesión
        </button>
        <button className="w-full flex items-center justify-center py-3 px-4 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-md hover:bg-gray-50 transition-colors">
          <GoogleIcon />
          Iniciar Sesión con Google
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          ¿No tienes cuenta? <a href="#" className="font-semibold text-primary-blue hover:underline">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
