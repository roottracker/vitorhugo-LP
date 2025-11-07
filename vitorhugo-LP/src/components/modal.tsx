import { useEffect, useRef } from "react";

interface ModalProps {
  showImg: boolean;
  img: string;
  onClose: () => void;
}

export const Modal = ({ showImg, img, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); 

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [onClose]);

  if (!showImg) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div ref={modalRef} className="relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          ×
        </button>
        <img
          src={img}
          alt=""
          className="max-w-[90vw] max-h-[80vh] rounded shadow-lg"
        />
      </div>
    </div>
  );
};
