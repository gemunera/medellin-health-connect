import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceModal from '@/components/ServiceModal';
import plasticSurgery from '@/assets/plastic-surgery.jpg';
import dental from '@/assets/dental.jpg';
import weightManagement from '@/assets/weight-management.jpg';
import neurosurgery from '@/assets/neurosurgery.jpg';
import rehabilitation from '@/assets/rehabilitation.jpg';
import medicalExpertReports from '@/assets/medical-expert-reports.jpg';
import mainli1 from '@/assets/mainli-1.jpg';
import mainli2 from '@/assets/mainli-2.jpg';
import mainli3 from '@/assets/mainli-3.jpg';
import mainli4 from '@/assets/mainli-4.jpg';
import mainli5 from '@/assets/mainli-5.jpg';
import mainli6 from '@/assets/mainli-6.jpg';
import mainli7 from '@/assets/mainli-7.jpg';
import mainli8 from '@/assets/mainli-8.jpg';
import mainli9 from '@/assets/mainli-9.jpg';
import mainli10 from '@/assets/mainli-10.jpg';
import mainliCover from '@/assets/mainli-cover.jpg';
import socialAssistance from '@/assets/social-assistance.jpg';

const Services = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: t('Cirugía Plástica y Medicina Estética', 'Plastic Surgery and Aesthetic Medicine'),
      description: t(
        'Procedimientos estéticos avanzados realizados por cirujanos certificados.',
        'Advanced aesthetic procedures performed by board-certified surgeons.'
      ),
      fullDescription: t(
        'Procedimientos realizados por especialistas certificados que buscan mejorar la apariencia y bienestar físico del paciente, manteniendo estándares internacionales de seguridad y ética médica. Incluye cirugías de contorno corporal, rejuvenecimiento facial, rinoplastia, liposucción, abdominoplastia, aumento o reducción mamaria, así como tratamientos no invasivos como bótox, rellenos dérmicos, láser facial y rejuvenecimiento con plasma rico en plaquetas.',
        'Procedures performed by certified specialists that seek to improve the appearance and physical well-being of the patient, maintaining international standards of safety and medical ethics. Includes body contouring surgeries, facial rejuvenation, rhinoplasty, liposuction, abdominoplasty, breast augmentation or reduction, as well as non-invasive treatments such as botox, dermal fillers, facial laser and platelet-rich plasma rejuvenation.'
      ),
      image: plasticSurgery,
    },
    {
      title: t('Odontología Integral y Estética', 'Comprehensive and Aesthetic Dentistry'),
      description: t(
        'Servicios odontológicos de alta precisión con tecnología digital avanzada.',
        'High-precision dental services with advanced digital technology.'
      ),
      fullDescription: t(
        'Servicios odontológicos de alta precisión que combinan tecnología digital y diseño estético. Incluye ortodoncia, implantología, blanqueamiento, carillas, diseño de sonrisa, rehabilitación oral y tratamientos funcionales de la mordida. Todos los procedimientos son realizados por odontólogos especialistas con experiencia internacional, priorizando estética, funcionalidad y confort del paciente.',
        'High-precision dental services that combine digital technology and aesthetic design. Includes orthodontics, implantology, whitening, veneers, smile design, oral rehabilitation and functional bite treatments. All procedures are performed by specialist dentists with international experience, prioritizing aesthetics, functionality and patient comfort.'
      ),
      image: dental,
    },
    {
      title: t('Tratamientos para la Obesidad', 'Obesity Treatments'),
      description: t(
        'Programa especial enfocado en una pérdida de peso segura y supervisada.',
        'Special program focused on safe and supervised weight loss.'
      ),
      fullDescription: t(
        'Programa especial enfocado en lograr una pérdida de peso segura, progresiva y supervisada por profesionales. Incluye acompañamiento médico, nutricional y orientación personalizada para cada paciente.',
        'Special program focused on achieving safe, progressive and supervised weight loss by professionals. Includes medical, nutritional support and personalized guidance for each patient.'
      ),
      image: weightManagement,
    },
    {
      title: t('Rehabilitación Integral – Neurocirugía Especializada', 'Comprehensive Rehabilitation – Specialized Neurosurgery'),
      description: t(
        'Recuperación y mejora funcional mediante técnicas avanzadas.',
        'Recovery and functional improvement through advanced techniques.'
      ),
      fullDescription: t(
        'Servicio dirigido a la recuperación y mejora funcional de cada paciente mediante técnicas avanzadas en rehabilitación y supervisión de especialistas en neurocirugía. Facilita la movilidad, reduce el dolor y promueve una mejor calidad de vida.',
        'Service aimed at the recovery and functional improvement of each patient through advanced rehabilitation techniques and supervision of specialists in neurosurgery. Facilitates mobility, reduces pain and promotes a better quality of life.'
      ),
      image: rehabilitation,
    },
    {
      title: t('Servicios Médicos Legales', 'Legal Medical Services'),
      description: t(
        'Asesoría médica especializada para procesos legales.',
        'Specialized medical advice for legal processes.'
      ),
      fullDescription: t(
        'Asesoría médica especializada para procesos legales, documentación clínica, peritajes y certificaciones necesarias para respaldar casos jurídicos relacionados con salud y atención médica.',
        'Specialized medical advice for legal processes, clinical documentation, expert opinions and certifications necessary to support legal cases related to health and medical care.'
      ),
      image: neurosurgery,
    },
    {
      title: t('Terapia MAINLI – Activación Neuronal', 'MAINLI Therapy – Neural Activation'),
      description: t(
        'Terapia orientada a estimular áreas específicas del sistema nervioso.',
        'Therapy aimed at stimulating specific areas of the nervous system.'
      ),
      fullDescription: t(
        'Terapia orientada a estimular áreas específicas del sistema nervioso para mejorar habilidades motoras, sensoriales y cognitivas.\n\nTambién se utiliza en procesos de acompañamiento a niños, brindando asesoramiento pediátrico y herramientas para apoyar su desarrollo mediante activación neuronal.',
        'Therapy aimed at stimulating specific areas of the nervous system to improve motor, sensory and cognitive skills.\n\nIt is also used in children support processes, providing pediatric counseling and tools to support their development through neural activation.'
      ),
      image: mainli1,
      images: [mainli2, mainli3, mainli4, mainli5, mainli6, mainli7, mainli8, mainli9, mainli10],
    },
    {
      title: t('Asistencia Social Integral para la Comunidad Hispana en Miami', 'Comprehensive Social Assistance for the Hispanic Community in Miami'),
      description: t(
        'Orientación, intervención y acompañamiento en problemáticas psicosociales, jurídicas y migratorias.',
        'Guidance, intervention and support in psychosocial, legal and immigration issues.'
      ),
      fullDescription: t(
        `Brindamos un servicio especializado de orientación, intervención y acompañamiento en problemáticas psicosociales, jurídicas y migratorias que afectan a la población colombiana residente o en tránsito en Florida.

**Componentes del servicio:**

**a. Asesoría Jurídica Especializada**
• Atención por profesionales en Derecho titulados en Colombia y con conocimiento operativo del marco legal estadounidense.
• Restitución internacional de menores (Convenio Colombia).
• Homologación de sentencias internacionales (Convenio Colombia).
• Trámite internacional de matrimonio y UMH (Convenio Colombia).
• Orientación jurídica en casos de:
  – Vulneración de derechos familiares, laborales y civiles.
  – Situaciones migratorias complejas.
  – Procesos de repatriación y búsqueda de personas.
  – Asesoría para trámites, conciliaciones y documentación.
• Acompañamiento en la interpretación de normativas binacionales cuando aplique.

**b. Atención Psicológica y Psicosocial**
• Intervención clínica y psicosocial en crisis, duelo migratorio, violencia intrafamiliar, estrés postraumático y situaciones de vulnerabilidad.
• Modelos de intervención basados en enfoques cognitivo-conductuales, trauma informado y neuropsicología clínica.
• Diseño e implementación de planes de restablecimiento emocional y reintegración social.

**c. Formación y Capacitación Comunitaria**
• Programas certificados para líderes comunitarios en:
  – Derechos Humanos (DD. HH.) y Derecho Internacional Humanitario (DIH).
  – Herramientas de apoyo psicosocial y acompañamiento comunitario.
• Campañas de sensibilización en prevención de violencia, salud mental y convivencia.

**d. Línea de Atención Social**
• Canal permanente para orientación, primeros auxilios psicológicos y direccionamiento a servicios especializados.`,
        `We provide a specialized service of guidance, intervention and support in psychosocial, legal and immigration issues that affect the Colombian population residing or in transit in Florida.

**Service Components:**

**a. Specialized Legal Advice**
• Attention by legal professionals graduated in Colombia with operational knowledge of the US legal framework.
• International restitution of minors (Colombia Agreement).
• Homologation of international sentences (Colombia Agreement).
• International marriage and UMH procedures (Colombia Agreement).
• Legal guidance in cases of:
  – Violation of family, labor and civil rights.
  – Complex immigration situations.
  – Repatriation processes and people search.
  – Advice for procedures, conciliations and documentation.
• Support in the interpretation of binational regulations when applicable.

**b. Psychological and Psychosocial Care**
• Clinical and psychosocial intervention in crisis, migratory grief, domestic violence, post-traumatic stress and vulnerability situations.
• Intervention models based on cognitive-behavioral approaches, trauma-informed care and clinical neuropsychology.
• Design and implementation of emotional restoration and social reintegration plans.

**c. Community Training and Capacity Building**
• Certified programs for community leaders in:
  – Human Rights (HR) and International Humanitarian Law (IHL).
  – Psychosocial support tools and community accompaniment.
• Awareness campaigns on violence prevention, mental health and coexistence.

**d. Social Assistance Hotline**
• Permanent channel for guidance, psychological first aid and referral to specialized services.`
      ),
      image: socialAssistance,
    },
    {
      title: t('Informes Médicos Periciales y Valoración de Daños', 'Medical Expert Reports and Damage Assessment'),
      description: t(
        'Centro médico especializado en la elaboración de informes periciales de alta precisión.',
        'Medical center specialized in the preparation of high-precision expert reports.'
      ),
      fullDescription: t(
        `Somos un centro médico especializado en la elaboración de informes periciales de alta precisión, fundamentales para respaldar reclamaciones y procesos legales relacionados con:

• Accidentes de tránsito
• Accidentes laborales
• Responsabilidad médico-sanitaria
• Lesiones neurológicas
• Lesiones del sistema musculoesquelético

**✓ Revisión del caso gratuita.**

**Características del servicio pericial:**
• Valoraciones realizadas por especialistas en neurociencias, medicina del dolor, medicina laboral, medicina física y rehabilitación, psicología y neuropsicología.
• Aplicación de protocolos internacionales como AMA Guides y ICF/OMS.
• Pruebas neurocognitivas y neurofuncionales con equipos de última tecnología.
• Informes con validez jurídica para procesos administrativos, aseguradoras y litigios complejos.
• Participación de expertos como peritos en audiencias cuando sea requerido.`,
        `We are a medical center specialized in the preparation of high-precision expert reports, essential for supporting claims and legal processes related to:

• Traffic accidents
• Workplace accidents
• Medical-healthcare liability
• Neurological injuries
• Musculoskeletal system injuries

**✓ Free case review.**

**Expert service features:**
• Assessments performed by specialists in neuroscience, pain medicine, occupational medicine, physical medicine and rehabilitation, psychology and neuropsychology.
• Application of international protocols such as AMA Guides and ICF/WHO.
• Neurocognitive and neurofunctional tests with state-of-the-art equipment.
• Reports with legal validity for administrative processes, insurers and complex litigation.
• Participation of experts as expert witnesses in hearings when required.`
      ),
      image: medicalExpertReports,
    },
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const whatsappNumber = '573218891061';
  const whatsappMessage = encodeURIComponent(
    t(
      'Hola, estoy interesado en sus servicios médicos. ¿Podrían darme más información?',
      'Hello, I am interested in your medical services. Could you give me more information?'
    )
  );

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              {t('Nuestros Servicios Médicos', 'Our Medical Services')}
            </h1>
            <p className="text-xl opacity-90">
              {t(
                'Atención médica especializada con los más altos estándares de calidad',
                'Specialized medical care with the highest quality standards'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{service.description}</p>
                  <Button 
                    onClick={() => handleServiceClick(service)}
                    variant="ghost" 
                    className="text-accent hover:text-accent/80 p-0 w-full justify-start"
                  >
                    {t('Ver Detalles', 'View Details')}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            {t('¿Necesitas Más Información?', 'Need More Information?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t(
              'Nuestro equipo está listo para responder tus preguntas',
              'Our team is ready to answer your questions'
            )}
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full">
              {t('Contáctanos', 'Contact Us')}
            </Button>
          </a>
        </div>
      </section>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};

export default Services;
