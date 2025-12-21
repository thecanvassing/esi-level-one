import { MessageCircle } from "lucide-react";

const FloatingWhatsAppButton = () => {
  return (
    <a
      href="https://chat.whatsapp.com/ErzJIN3kvxu1CnAp2qK6F0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20BA5C] hover:scale-110 transition-all duration-300 hover:shadow-xl"
      aria-label="Join our WhatsApp community"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default FloatingWhatsAppButton;
