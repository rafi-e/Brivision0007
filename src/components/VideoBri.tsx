import { useRef, useState, useEffect, useCallback } from "react";
import briVideo from "../assets/videos/video.mp4"

export default function VideoBri() {
  // State untuk melacak status dibisukan (muted)
  const [isMuted, setIsMuted] = useState(true);
  // State untuk melacak status kontrol video (muncul setelah double-click)
  const [showControls, setShowControls] = useState(false);

  // Menggunakan tipe eksplisit untuk useRef
  const videoRef = useRef<HTMLVideoElement | null>(null);

  /**
   * Fungsi untuk membunyikan (unmute) video
   * Dipicu oleh penekanan tombol spasi
   */
  const handleUnmute = useCallback(() => {
    if (isMuted && videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);

      videoRef.current
        .play()
        .catch((e) =>
          console.error("Playback failed after spacebar-unmute:", e)
        );
    }
  }, [isMuted]);

  /**
   * Fungsi untuk menampilkan kontrol video
   * Dipicu oleh double-click
   */
  const handleDoubleClick = () => {
    setShowControls(true);
  };

  /**
   * Efek untuk mengaktifkan unmute via tombol Spasi
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        // Mencegah aksi default browser (seperti scroll ke bawah)
        event.preventDefault();
        handleUnmute();
      }
    };

    // Tambahkan event listener saat komponen dipasang
    document.addEventListener("keydown", handleKeyDown);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleUnmute]); // handleUnmute adalah dependensi karena menggunakan state isMuted

  return (
    <div
      // Tambahkan tabindex agar div dapat difokuskan untuk menangkap event keydown
      tabIndex={0}
      className="aspect-video overflow-hidden rounded-lg relative cursor-pointer focus:outline-none"
      onDoubleClick={handleDoubleClick} // Lampirkan double-click handler ke container
    >
      <video
        ref={videoRef}
        src={briVideo}
        title="Video Player"
        loop
        autoPlay
        // Controls hanya muncul setelah double-click (showControls = true)
        controls={showControls}
        // Selalu mulai muted agar autoPlay bekerja, dikontrol oleh state
        muted={isMuted}
        playsInline
        className="w-full h-full object-fit"
      >
        Browser Anda tidak mendukung tag video.
      </video>

      {/* Pesan Overlay (Hanya ditampilkan ketika isMuted adalah true) */}
      {isMuted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-300 pointer-events-none">
          <div className="p-4 bg-white text-black text-center rounded-lg shadow-xl font-bold text-lg sm:text-xl border-4 border-blue-500">
            Tekan Enter untuk aktifkan suara
          </div>
        </div>
      )}
    </div>
  );
}
