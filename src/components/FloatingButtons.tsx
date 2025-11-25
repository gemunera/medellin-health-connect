import { MessageCircle, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingButtons = () => {
  const whatsappNumber = '573218891061';
  const instagramHandle = 'alliancehealthmiami';

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>

      {/* Instagram Button */}
      <a
        href={`https://instagram.com/${instagramHandle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Instagram className="h-6 w-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingButtons;
