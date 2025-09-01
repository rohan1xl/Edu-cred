import React from 'react';
import { X, Play, Pause, Volume2, Maximize, SkipBack, SkipForward } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(45); // Demo: 45 seconds into 3:45 video
  const [duration] = React.useState(225); // 3:45 in seconds

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-5xl mx-4" style={{ maxWidth: '1200px' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10 bg-black/50 rounded-full p-2"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Container */}
        <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          {/* Video Header */}
          <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-white text-sm font-medium">EduCred Platform Demo</div>
              </div>
              <div className="text-gray-400 text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div className="relative aspect-video bg-black">
            {/* Demo Video Content */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FFD700%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
              
              {/* Demo Content */}
              <div className="relative text-center space-y-8 px-8 max-w-4xl">
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-white">
                    EduCred Platform Demo
                  </h1>
                  <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
                    Watch how institutions can mint secure blockchain credentials and how students can verify and manage their certificates using our revolutionary platform.
                  </p>
                </div>

                {/* Demo Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-700">
                    <div className="text-yellow-400 font-bold text-lg mb-2">Step 1</div>
                    <h3 className="text-white font-semibold mb-2">Institution Minting</h3>
                    <p className="text-gray-300 text-sm">Universities upload certificates and mint them as NFTs on the blockchain</p>
                  </div>
                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-700">
                    <div className="text-yellow-400 font-bold text-lg mb-2">Step 2</div>
                    <h3 className="text-white font-semibold mb-2">Student Wallet</h3>
                    <p className="text-gray-300 text-sm">Students receive credentials directly to their MetaMask wallet</p>
                  </div>
                  <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-700">
                    <div className="text-yellow-400 font-bold text-lg mb-2">Step 3</div>
                    <h3 className="text-white font-semibold mb-2">Public Verification</h3>
                    <p className="text-gray-300 text-sm">Anyone can verify credentials instantly using blockchain technology</p>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-700 mt-8">
                  <h3 className="text-yellow-400 text-xl font-bold mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white">Tamper-proof security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white">Instant verification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white">Decentralized storage</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white">Student ownership</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-10 w-12 h-12 bg-yellow-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
          </div>

          {/* Video Controls */}
          <div className="bg-gray-900 border-t border-gray-800 px-6 py-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 cursor-pointer">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full relative transition-all duration-200"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-yellow-400"></div>
                </div>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                <button 
                  onClick={togglePlay}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-3 rounded-full hover:from-yellow-500 hover:to-yellow-400 transition-all duration-200 shadow-lg"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-400">
                  Learn how EduCred revolutionizes credential verification
                </div>
                <button className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;