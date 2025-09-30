import { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';
import { openWhatsApp } from '@/lib/utils';
import { useGtag } from '@/hooks/use-gtag';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const { trackConversion } = useGtag();

  // Função para verificar se está no horário de atendimento
  const checkBusinessHours = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = domingo, 6 = sábado
    
    // Horário comercial: segunda a sexta, 8h às 18h
    if (day >= 1 && day <= 5 && hour >= 8 && hour < 18) {
      return true;
    }
    
    // Sábado: 8h às 12h
    if (day === 6 && hour >= 8 && hour < 12) {
      return true;
    }
    
    return false;
  };

  useEffect(() => {
    // Verificar status online ao carregar
    setIsOnline(checkBusinessHours());

    // Verificar status a cada minuto
    const interval = setInterval(() => {
      setIsOnline(checkBusinessHours());
    }, 60000); // 1 minuto

    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Auto-hide tooltip after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    // Rastrear conversão do Google Ads
    trackConversion('lead_whatsapp', 1.0, 'BRL', {
      'custom_parameters': {
        'source': 'whatsapp_button',
        'urgency': 'emergency'
      }
    });
    
    const message = 'Olá! Preciso de consultoria em Saúde e Segurança do Trabalho. Vocês oferecem serviços de SST?';
    openWhatsApp(message);
    setShowTooltip(false);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };


  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-10 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="whatsapp-btn bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative animate-pulse-ring"
          aria-label="Falar no WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </button>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-28 right-6 z-40 animate-slide-in">
          <Card className="bg-white shadow-2xl border-0 max-w-sm">
            <CardContent className="p-4 relative">
              <button
                onClick={handleCloseTooltip}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <FaTimes className="w-4 h-4" />
              </button>
              
              <div className="pr-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-800">Alta Performance SST</div>
                    <div className="text-sm text-gray-600">
                      {isOnline ? 'Online agora' : 'Fora do horário'} - Especialista em SST
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-3">
                  👋 Olá! Especialistas em Saúde e Segurança do Trabalho. Oferecemos consultoria, treinamentos e soluções completas em SST. Como posso ajudar?
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-orange-400'}`}></div>
                  <span>
                    {isOnline ? 'Horário comercial' : 'Fora do horário - Seg a Sex 8h-18h, Sáb 8h-12h'}
                  </span>
                </div>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Falar no WhatsApp
                </button>
              </div>
              
              {/* Tooltip Arrow */}
              <div className="absolute bottom-0 right-8 transform translate-y-full">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
