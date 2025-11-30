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

  // Enhanced markdown-like parser for bold text and formatting
  const formatDescription = (text: string) => {
    return text.split('\n').map((line, index) => {
      // Replace **text** with bold
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>');
      
      // Check line type for styling
      const isBullet = line.trim().startsWith('•');
      const isSubBullet = line.trim().startsWith('–');
      const isHeader = line.trim().startsWith('**') && line.trim().endsWith('**');
      const isEmpty = line.trim() === '';
      
      // Determine classes based on line type
      let className = 'block ';
      if (isEmpty) {
        className += 'h-3';
      } else if (isHeader) {
        className += 'mt-4 mb-2 text-foreground';
      } else if (isSubBullet) {
        className += 'ml-8 py-0.5 text-muted-foreground';
      } else if (isBullet) {
        className += 'ml-4 py-0.5 text-muted-foreground';
      } else {
        className += 'py-1';
      }
      
      return (
        <span 
          key={index} 
          className={className}
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
          {/* Single Fluid Image Carousel */}
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {/* Main image first */}
              <CarouselItem>
                <div className="relative h-80 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </CarouselItem>
              {/* Additional images */}
              {service.images?.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-80 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                    <img
                      src={img}
                      alt={`${service.title} ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

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
