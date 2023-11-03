'use client'
interface WhatsappButtonProps {
  text: string
}

export default function WhatsappButton({ text }: WhatsappButtonProps) {
  const phoneNumber = '32998081612'
  const handleWhatsAppWebClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank')
  }
  return <button onClick={handleWhatsAppWebClick}>{text}</button>
}
