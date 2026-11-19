import { Icon } from '@iconify/react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6281234567890?text=Halo%2C%20saya%20tertarik%20dengan%20jasa%20fotografer%20di%20LensaKita"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold hover:scale-105 transition"
      aria-label="Hubungi via WhatsApp"
    >
      <Icon icon="mdi:whatsapp" width={24} />
      <span>WhatsApp</span>
    </a>
  )
}
