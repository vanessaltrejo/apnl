const BookingForm = () => {
  return (
    <div className="w-full max-w-full p-8 space-y-6 bg-white rounded-lg shadow-xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-dark-blue">Estamos aquí para escucharte</h2>
        <p className="mt-2 text-base text-dark-blue opacity-80">
          Déjanos tus datos y te contactaremos para brindarte información o agendar una consulta con el psicólogo adecuado para ti.
        </p>
        <p className="mt-4 text-sm font-semibold text-primary-blue">
          100% confidencial | Sin compromiso | Respuesta en menos de 24h
        </p>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label htmlFor="patientName" className="block text-sm font-bold text-gray-700 mb-1">
              Nombre Completo:
            </label>
            <input
              type="text"
              id="patientName"
              placeholder="Ej. Juan Pérez"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none"
            />
          </div>

          <div>
            <label htmlFor="patientWhatsapp" className="block text-sm font-bold text-gray-700 mb-1">
              WhatsApp / Teléfono:
            </label>
            <input
              type="tel"
              id="patientWhatsapp"
              placeholder="81 1234 5678"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none"
            />
          </div>

          <div>
            <label htmlFor="patientAge" className="block text-sm font-bold text-gray-700 mb-1">
              Edad:
            </label>
            <input
              type="number"
              id="patientAge"
              min="0"
              placeholder="Ej. 25"
              className="block w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none"
            />
          </div>
        </div>

        <div>
          <label htmlFor="modality" className="block text-sm font-bold text-gray-700 mb-1">
            Modalidad de sesión:
          </label>
          <select
            id="modality"
            className="block w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none bg-white cursor-pointer"
          >
            <option value="">Selecciona modalidad...</option>
            <option value="presencial">Presencial (En consultorio)</option>
            <option value="online">Online (Video llamada)</option>
          </select>
        </div>

        <div>
          <label htmlFor="therapyReason" className="block text-sm font-bold text-gray-700 mb-1">
            ¿Qué te trae a terapia?
          </label>
          <textarea
            id="therapyReason"
            rows={3}
            placeholder="Platícanos brevemente en qué podemos apoyarte..."
            className="block w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-all outline-none resize-none"
          ></textarea>
          <p className="mt-2 text-[11px] text-gray-500 italic">
            * Si cuentas con convenio de empresa, por favor menciónalo aquí.
          </p>
        </div>

        <div className="flex items-start bg-slate-50 p-3 rounded-xl border border-slate-100">
          <input
            id="privacyPolicy"
            name="privacyPolicy"
            type="checkbox"
            className="h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue mt-1 cursor-pointer"
          />
          <div className="ml-3 text-[12px] leading-tight text-gray-600">
            <label htmlFor="privacyPolicy" className="cursor-pointer">
              He leído y acepto la <a href="#" className="font-bold text-primary-blue hover:underline">Política de privacidad</a> y el <a href="#" className="font-bold text-primary-blue hover:underline">Aviso legal</a>.
            </label>
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-4 px-4 bg-primary-blue text-white font-bold rounded-xl shadow-lg shadow-primary-blue/20 hover:bg-opacity-90 transition-all active:scale-[0.98]"
          >
            Enviar Información
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
