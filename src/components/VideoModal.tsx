import React from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Video Container */}
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
          {/* Video Header */}
          <div className="bg-slate-800/50 border-b border-slate-700 px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-slate-400 text-sm font-medium">EduCred Demo Video</div>
            </div>
          </div>

          {/* Video Content */}
          <div className="relative aspect-video bg-slate-900">
            {/* Demo Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23374151%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
              
              {/* Demo Content */}
              <div className="relative text-center space-y-6 px-8">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                  <Play className="w-12 h-12 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    EduCred Platform Demo
                  </h3>
                  <p className="text-slate-300 max-w-md mx-auto">
                    See how institutions can mint secure blockchain credentials and how students can verify and manage their certificates.
                  </p>
                </div>

                {/* Demo Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <div className="text-purple-400 font-semibold text-sm mb-1">Step 1</div>
                    <div className="text-white text-sm">Institution Minting</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <div className="text-pink-400 font-semibold text-sm mb-1">Step 2</div>
                    <div className="text-white text-sm">Student Wallet</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <div className="text-blue-400 font-semibold text-sm mb-1">Step 3</div>
                    <div className="text-white text-sm">Public Verification</div>
                  </div>
                </div>

                {/* Simulated Video Timeline */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Demo Video</span>
                    <span>3:45</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-1/3 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                      </svg>
                    </button>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                      <Play className="w-6 h-6" />
                    </button>
                    <button className="text-slate-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 18h2V6h-2zm-3.5-6L4 6v12z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>

            {/* Replace this with actual video when available */}
            {/* 
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              src="/path-to-your-demo-video.mp4"
            >
              Your browser does not support the video tag.
            </video>
            */}
          </div>

          {/* Video Footer */}
          <div className="bg-slate-800/50 border-t border-slate-700 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-slate-400 text-sm">
                Learn how EduCred revolutionizes credential verification
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Share
                </button>
                <button className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                  Download
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