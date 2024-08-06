interface VideoModalProps {
   isOpen: boolean;
   onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
   if (!isOpen) return null; // Do not render the video if isOpen is false

   return (
      <div className="fixed h-screen w-full top-0 left-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
         {/* Close button */}
         <div
            onClick={onClose}
            className="absolute top-12 right-28 text-white text-6xl cursor-pointer"
         >
            x
         </div>
         <video
            autoPlay
            controls
            className="w-[80%] h-[80%] object-cover"
         >
            <source
               src="/herovideo.mp4"
               type="video/mp4"
            />
            Your browser does not support the video tag.
         </video>
      </div>
   );
};

export default VideoModal;
