import { useState } from "react";
import { Layout } from "../../components";
import { Link } from "react-router-dom";

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("faq");
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    orderNumber: "",
    productModel: ""
  });


  const faqs = [
    {
      id: 1,
      question: "¿Cuál es el tiempo de entrega de los productos?",
      answer: "El tiempo de entrega estándar es de 3 a 5 días hábiles para ciudades principales y de 5 a 7 días hábiles para el resto del país. Para envíos internacionales, el tiempo de entrega puede variar entre 7 y 15 días hábiles dependiendo del destino."
    },
    {
      id: 2,
      question: "¿Cómo puedo hacer seguimiento a mi pedido?",
      answer: "Una vez realizado tu pedido, recibirás un correo electrónico con el número de guía y un enlace para hacer seguimiento a tu envío. También puedes ingresar a tu cuenta en nuestra página web y consultar el estado de tu pedido en la sección 'Mis Pedidos'."
    },
    {
      id: 3,
      question: "¿Cuál es la garantía de los productos Ulefone?",
      answer: "Todos los smartphones y tablets Ulefone Armor cuentan con una garantía de 12 meses por defectos de fabricación. Los accesorios tienen una garantía de 3 meses. Para hacer efectiva la garantía, debes conservar la factura de compra y el empaque original del producto."
    },
    {
      id: 4,
      question: "¿Cómo puedo solicitar una devolución o cambio?",
      answer: "Para solicitar una devolución o cambio, debes comunicarte con nuestro equipo de servicio al cliente dentro de los 5 días siguientes a la recepción del producto. El producto debe estar en perfectas condiciones, con todos sus accesorios y en su empaque original. Puedes iniciar el proceso desde la sección 'Devoluciones' en tu cuenta o contactándonos directamente."
    },
    {
      id: 5,
      question: "¿Los smartphones Ulefone son resistentes al agua?",
      answer: "Sí, todos los smartphones de la serie Ulefone Armor cuentan con certificación IP68/IP69K, lo que significa que son resistentes al agua (hasta 1.5 metros durante 30 minutos), al polvo y a caídas. Algunos modelos también cuentan con certificación militar MIL-STD-810G para resistencia a condiciones extremas."
    },
    {
      id: 6,
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos múltiples métodos de pago: tarjetas de crédito (Visa, MasterCard, American Express), tarjetas débito, transferencia bancaria, PSE, efectivo en puntos de pago Efecty y Baloto, y pagos a través de PayPal para compras internacionales."
    },
    {
      id: 7,
      question: "¿Cómo puedo actualizar el software de mi dispositivo Ulefone?",
      answer: "Los dispositivos Ulefone reciben actualizaciones OTA (Over The Air) que se instalan automáticamente cuando están disponibles. También puedes verificar manualmente si hay actualizaciones disponibles en Configuración > Sistema > Actualización del sistema. En nuestra sección de 'Descargas' encontrarás guías detalladas y archivos de actualización para cada modelo."
    },
    {
      id: 8,
      question: "¿Ofrecen servicio técnico para dispositivos Ulefone?",
      answer: "Sí, contamos con servicio técnico especializado para todos los dispositivos Ulefone. Puedes solicitar soporte técnico a través de nuestra página web, por correo electrónico o visitando nuestro centro de servicio en Bogotá. El diagnóstico inicial es gratuito."
    }
  ];


  const manuals = [
    {
      id: 1,
      title: "Manual de Usuario Ulefone Armor X10 Pro",
      format: "PDF",
      size: "4.2 MB",
      link: "#"
    },
    {
      id: 2,
      title: "Manual de Usuario Ulefone Armor X12 Pro",
      format: "PDF",
      size: "4.5 MB",
      link: "#"
    },
    {
      id: 3,
      title: "Manual de Usuario Ulefone Armor X13",
      format: "PDF",
      size: "4.8 MB",
      link: "#"
    },
    {
      id: 4,
      title: "Manual de Usuario Ulefone Armor 22",
      format: "PDF",
      size: "5.1 MB",
      link: "#"
    },
    {
      id: 5,
      title: "Manual de Usuario Ulefone Power Armor 19",
      format: "PDF",
      size: "5.3 MB",
      link: "#"
    },
    {
      id: 6,
      title: "Manual de Usuario Ulefone Armor Pad 1",
      format: "PDF",
      size: "6.2 MB",
      link: "#"
    },
    {
      id: 7,
      title: "Guía de Inicio Rápido - Smartphones Ulefone",
      format: "PDF",
      size: "2.1 MB",
      link: "#"
    },
    {
      id: 8,
      title: "Guía de Inicio Rápido - Tablets Ulefone",
      format: "PDF",
      size: "2.3 MB",
      link: "#"
    },
    {
      id: 9,
      title: "Guía de Solución de Problemas Comunes",
      format: "PDF",
      size: "3.5 MB",
      link: "#"
    },
    {
      id: 10,
      title: "Guía de Funciones Especiales Ulefone Armor",
      format: "PDF",
      size: "4.0 MB",
      link: "#"
    }
  ];


  const serviceLocations = [
    {
      id: 1,
      city: "Bogotá",
      address: "Calle 85 #15-30, Edificio Tecnológico, Local 102",
      phone: "(601) 123-4567",
      email: "servicio.bogota@cordecas.com",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM, Sábados: 9:00 AM - 2:00 PM"
    },
    {
      id: 2,
      city: "Medellín",
      address: "Carrera 43A #18-56, Centro Comercial Tecnología, Local 205",
      phone: "(604) 234-5678",
      email: "servicio.medellin@cordecas.com",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM, Sábados: 9:00 AM - 2:00 PM"
    },
    {
      id: 3,
      city: "Cali",
      address: "Avenida 6N #28N-45, Edificio Innova, Local 3",
      phone: "(602) 345-6789",
      email: "servicio.cali@cordecas.com",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM, Sábados: 9:00 AM - 2:00 PM"
    },
    {
      id: 4,
      city: "Barranquilla",
      address: "Calle 76 #56-09, Centro Empresarial Caribe, Local 12",
      phone: "(605) 456-7890",
      email: "servicio.barranquilla@cordecas.com",
      hours: "Lunes a Viernes: 9:00 AM - 6:00 PM, Sábados: 9:00 AM - 2:00 PM"
    }
  ];


  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.");

    setContactForm({
      name: "",
      email: "",
      subject: "",
      message: "",
      orderNumber: "",
      productModel: ""
    });
  };


  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">

        <div className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-black">Soporte</span>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Centro de Soporte</h1>
          <p className="text-gray-600">
            Bienvenido al Centro de Soporte de CORDECAS. Aquí encontrarás toda la información y asistencia que necesitas
            para tus dispositivos Ulefone Armor. Nuestro equipo está comprometido a brindarte el mejor servicio y resolver
            todas tus dudas.
          </p>
        </div>


        <div className="border-b border-gray-200 mb-8">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === "faq"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("faq")}
            >
              Preguntas Frecuentes
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === "manuals"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("manuals")}
            >
              Manuales y Guías
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm border-b-2 ${
                activeTab === "contact"
                  ? "border-black text-black"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contacto y Servicio Técnico
            </button>
          </nav>
        </div>


        <div className="mb-12">

          {activeTab === "faq" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {faqs.map(faq => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full flex justify-between items-center p-4 text-left font-medium focus:outline-none"
                      onClick={() => toggleQuestion(faq.id)}
                    >
                      <span>{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transition-transform ${
                          activeQuestion === faq.id ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    {activeQuestion === faq.id && (
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}


          {activeTab === "manuals" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Manuales y Guías</h2>
              <p className="text-gray-600 mb-6">
                Descarga los manuales de usuario, guías de inicio rápido y otros documentos útiles para tus dispositivos Ulefone Armor.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                      <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider">Formato</th>
                      <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider">Tamaño</th>
                      <th className="py-3 px-4 text-left font-medium text-gray-500 uppercase tracking-wider">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {manuals.map(manual => (
                      <tr 
                        key={manual.id} 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => window.open(manual.link, '_blank')}
                      >
                        <td className="py-3 px-4">{manual.title}</td>
                        <td className="py-3 px-4">{manual.format}</td>
                        <td className="py-3 px-4">{manual.size}</td>
                        <td className="py-3 px-4">
                          <div className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              ></path>
                            </svg>
                            Descargar
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}


          {activeTab === "contact" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Contacto y Servicio Técnico</h2>
              

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Centros de Servicio Técnico</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceLocations.map(location => (
                    <a 
                      key={location.id} 
                      href={`mailto:${location.email}`} 
                      className="block bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="font-bold text-lg mb-2">{location.city}</h4>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                          <span>{location.address}</span>
                        </p>
                        <p className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                          </svg>
                          <span>{location.phone}</span>
                        </p>
                        <p className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                          <span>{location.email}</span>
                        </p>
                        <p className="flex items-start">
                          <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>{location.hours}</span>
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              

              <div>
                <h3 className="text-xl font-bold mb-4">Formulario de Contacto</h3>
                <p className="text-gray-600 mb-6">
                  ¿Tienes alguna pregunta o necesitas asistencia? Completa el siguiente formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
                </p>
                <form onSubmit={handleContactFormSubmit} className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleContactFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="technical-support">Soporte técnico</option>
                        <option value="warranty">Garantía</option>
                        <option value="order-status">Estado de pedido</option>
                        <option value="return">Devolución o cambio</option>
                        <option value="general-inquiry">Consulta general</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Número de pedido (si aplica)
                      </label>
                      <input
                        type="text"
                        id="orderNumber"
                        name="orderNumber"
                        value={contactForm.orderNumber}
                        onChange={handleContactFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="productModel" className="block text-sm font-medium text-gray-700 mb-1">
                        Modelo del producto (si aplica)
                      </label>
                      <input
                        type="text"
                        id="productModel"
                        name="productModel"
                        value={contactForm.productModel}
                        onChange={handleContactFormChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
                    >
                      Enviar mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
