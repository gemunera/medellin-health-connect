import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    fullDescription: string;
    image: string;
    images?: string[];
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  const { t } = useLanguage();
  
  if (!service) return null;

  const whatsappNumber = '573218891061';
  const whatsappMessage = encodeURIComponent(
    `Hola, estoy interesado en ${service.title}. ¿Podrían darme más información?`
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading font-bold pr-8">
            {service.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative h-80 rounded-xl overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Additional Images Gallery */}
          {service.images && service.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.images.map((img, index) => (
                <div key={index} className="relative h-32 rounded-lg overflow-hidden">
                  <img
                    src={img}
                    alt={`${service.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {service.fullDescription}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-10 py-6 rounded-full">
                {t('Agendar Cita', 'Schedule Appointment')}
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
