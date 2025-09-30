import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Função para abrir WhatsApp com mensagem personalizada
export function openWhatsApp(message?: string) {
  const defaultMessage = 'Olá! Preciso de atendimento em Direito Trabalhista. Pode me ajudar?';
  const finalMessage = message || defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  // Formato correto para número brasileiro: 21985970247 (sem hífen e sem parênteses)
  window.open(`https://wa.me/5521 985970247?text=${encodedMessage}`, '_blank');
}