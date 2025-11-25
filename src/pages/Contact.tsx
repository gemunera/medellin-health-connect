import { MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const whatsappNumber = '573218891061';
  const instagramHandle = 'alliancehealthmiami';

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
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Card */}
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-[#25D366]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-3">
                      WhatsApp
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {t(
                        'Chatea con nosotros directamente',
                        'Chat with us directly'
                      )}
                    </p>
                    <p className="text-xl font-semibold mb-6">
                      +57 321 889 1061
                    </p>
                  </div>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                      {t('Abrir WhatsApp', 'Open WhatsApp')}
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Instagram Card */}
              <Card className="border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] rounded-full flex items-center justify-center">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-3">
                      Instagram
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {t(
                        'Síguenos y envía mensajes',
                        'Follow us and send messages'
                      )}
                    </p>
                    <p className="text-xl font-semibold mb-6">
                      @{instagramHandle}
                    </p>
                  </div>
                  <a
                    href={`https://instagram.com/${instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 text-white">
                      {t('Ir a Instagram', 'Go to Instagram')}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Info Section */}
            <Card className="border-2 bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
                  {t('Información de Ubicación', 'Location Information')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Miami, Florida</p>
                      <p className="opacity-90">United States</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Medellín</p>
                      <p className="opacity-90">Colombia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-heading font-bold">
                {t(
                  '¿Listo para Comenzar tu Viaje Médico?',
                  'Ready to Start Your Medical Journey?'
                )}
              </h3>
              <p className="text-xl text-muted-foreground">
                {t(
                  'Nuestro equipo bilingüe está disponible para atenderte',
                  'Our bilingual team is available to serve you'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
