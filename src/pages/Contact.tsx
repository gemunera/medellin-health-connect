import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('Mensaje Enviado', 'Message Sent'),
      description: t(
        'Gracias por contactarnos. Te responderemos pronto.',
        'Thank you for contacting us. We will respond soon.'
      ),
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('Teléfono Miami', 'Miami Phone'),
      value: '+1 (305) XXX-XXXX',
      link: 'tel:+1305XXXXXXX',
    },
    {
      icon: Mail,
      title: t('Correo Electrónico', 'Email'),
      value: 'info@alliancehealthinstitute.com',
      link: 'mailto:info@alliancehealthinstitute.com',
    },
    {
      icon: MapPin,
      title: t('Ubicación', 'Location'),
      value: 'Miami, Florida, USA',
      link: null,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (305) XXX-XXXX',
      link: 'https://wa.me/1305XXXXXXX',
    },
  ];

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-heading font-bold">
              {t('Contáctanos', 'Contact Us')}
            </h1>
            <p className="text-xl opacity-90">
              {t(
                'Estamos aquí para responder tus preguntas y ayudarte a comenzar tu viaje médico',
                'We are here to answer your questions and help you start your medical journey'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  {t('Solicita tu Evaluación Gratuita', 'Request Your Free Evaluation')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t('Nombre Completo', 'Full Name')} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('Juan Pérez', 'John Doe')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t('Correo Electrónico', 'Email')} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ejemplo@email.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      {t('Teléfono', 'Phone')} *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (305) 123-4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      {t('Servicio de Interés', 'Service of Interest')}
                    </label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder={t('Ej: Cirugía Plástica', 'e.g., Plastic Surgery')}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('Mensaje', 'Message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder={t('Cuéntanos sobre tu consulta...', 'Tell us about your inquiry...')}
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {t('Enviar Mensaje', 'Send Message')}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold mb-6">
                  {t('Información de Contacto', 'Contact Information')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t(
                    'Nuestro equipo bilingüe está disponible para atenderte y responder todas tus preguntas.',
                    'Our bilingual team is available to serve you and answer all your questions.'
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-accent/10 rounded-full">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-accent transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-2 bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    {t('Horario de Atención', 'Office Hours')}
                  </h3>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span>{t('Lunes - Viernes:', 'Monday - Friday:')}</span>
                      <span>9:00 AM - 6:00 PM EST</span>
                    </p>
                    <p className="flex justify-between">
                      <span>{t('Sábado:', 'Saturday:')}</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </p>
                    <p className="flex justify-between">
                      <span>{t('Domingo:', 'Sunday:')}</span>
                      <span>{t('Cerrado', 'Closed')}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
