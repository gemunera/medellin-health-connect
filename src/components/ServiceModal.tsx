import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

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

  // Simple markdown-like parser for bold text and formatting
  const formatDescription = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Replace **text** with bold
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Check if it's a bullet point
      const isBullet = line.trim().startsWith('•') || line.trim().startsWith('–');
      const isSubBullet = line.trim().startsWith('–');
      
      return (
        <span 
          key={index} 
          className={`block ${isBullet ? 'ml-4' : ''} ${isSubBullet ? 'ml-8' : ''}`}
          dangerouslySetInnerHTML={{ __html: formattedLine || '&nbsp;' }}
        />
      );
    });
  };
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
          <div className="relative h-96 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image Carousel */}
          {service.images && service.images.length > 0 && (
            <Carousel className="w-full">
              <CarouselContent>
                {service.images.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="relative h-64 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={img}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          )}

          {/* Description */}
          <div className="prose max-w-none">
            <div className="text-lg text-muted-foreground leading-relaxed">
              {formatDescription(service.fullDescription)}
            </div>
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
