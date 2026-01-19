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

      <form className="space-y-6">
        <div>
          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">
            Nombre del Paciente:
          </label>
          <input
            type="text"
            id="patientName"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>

        <div>
          <label htmlFor="patientWhatsapp" className="block text-sm font-medium text-gray-700">
            WhatsApp del Paciente:
          </label>
          <input
            type="tel"
            id="patientWhatsapp"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>

        <div>
          <label htmlFor="therapyReason" className="block text-sm font-medium text-gray-700">
            Cuéntanos qué te trae a terapia:
          </label>
          <textarea
            id="therapyReason"
            rows={4}
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
          ></textarea>
          <p className="mt-2 text-xs text-gray-500">
            Nota: en caso de cobrar con convenio de empresa, menciona qué organización es.
          </p>
        </div>

        <div className="flex items-start">
          <input
            id="privacyPolicy"
            name="privacyPolicy"
            type="checkbox"
            className="h-4 w-4 text-primary-blue border-gray-300 rounded focus:ring-primary-blue mt-1"
          />
          <div className="ml-3 text-sm">
            <label htmlFor="privacyPolicy" className="text-gray-700">
              Confirmo que he leído y acepto la <a href="#" className="font-semibold text-primary-blue hover:underline">Política de privacidad</a> y el <a href="#" className="font-semibold text-primary-blue hover:underline">Aviso legal</a>, y autorizo el uso de mis datos para contactarme.
            </label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled
            className="w-full py-3 px-4 bg-primary-blue text-white font-semibold rounded-md shadow-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
          >
            Enviar Información
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
