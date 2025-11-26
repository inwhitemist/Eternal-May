import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface Props {
  src: string | null;
  onClose: () => void;
}

export default function ImagePreview({ src, onClose }: Props) {
  React.useEffect(() => {
    if (!src) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [src]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={src}
            alt="Просмотр изображения"
            className="max-h-[90vh] max-w-[92vw object-contain shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur-md transition hover:bg-white/30"
            aria-label="Закрыть изображение"
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
