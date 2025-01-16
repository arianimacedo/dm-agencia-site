"use client";

export default function ClientButton({ whatsappNumber }) {
  return (
    <button
      className="md:px-6 px-16 py-3 bg-orange-500 text-white rounded-md text-sm font-semibold hover:bg-orange-400 transition duration-300 md:text-lg"
      onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
    >
      CONTRATE JÁ!
    </button>
  );
}
