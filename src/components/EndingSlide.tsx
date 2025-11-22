import { Heart, Trophy, Music, Gamepad, CheckCircle } from "lucide-react";

export const EndingSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center relative overflow-hidden p-8">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-white/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      
      {/* Static Confetti */}
      <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-celebration rounded-sm transform rotate-45" />
      <div className="absolute top-[20%] left-[80%] w-3 h-3 bg-blue-400 rounded-full" />
      <div className="absolute top-[70%] left-[15%] w-3 h-3 bg-green-400 rounded-sm transform rotate-45" />
      <div className="absolute top-[80%] left-[85%] w-3 h-3 bg-heart rounded-full" />
      <div className="absolute top-[15%] left-[40%] w-3 h-3 bg-purple-400 rounded-sm" />
      <div className="absolute top-[60%] left-[90%] w-3 h-3 bg-pink-300 rounded-full" />

      {/* Floating Stars */}
      <div className="absolute top-24 left-24 text-celebration text-4xl animate-pulse">★</div>
      <div className="absolute bottom-32 right-32 text-white text-2xl animate-pulse opacity-40" style={{ animationDelay: '1s' }}>★</div>

      {/* Main Content Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl max-w-4xl animate-slide-in-up">
        {/* Icon Group */}
        <div className="flex justify-center items-center gap-8 mb-10">
          <div className="text-5xl opacity-80 transform -rotate-12" style={{ animation: 'float 4s ease-in-out infinite' }}>
            🥂
          </div>
          <div className="relative">
            <Heart className="w-24 h-24 text-heart fill-heart drop-shadow-2xl animate-pulse-heart" />
            <CheckCircle className="absolute -top-2 -right-2 w-12 h-12 text-celebration bg-white rounded-full border-4 border-primary p-1" />
          </div>
          <div className="text-5xl opacity-80 transform rotate-12" style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '2s' }}>
            🍾
          </div>
        </div>

        {/* Main Title */}
        <h1 
          className="text-7xl md:text-8xl font-black mb-4 text-celebration drop-shadow-2xl"
          style={{ 
            fontFamily: "'Pacifico', cursive",
            textShadow: '4px 4px 0px rgba(157, 23, 77, 1)' 
          }}
        >
          Chúc Mừng!
        </h1>

        {/* Divider */}
        <div className="h-1 w-48 bg-celebration mx-auto rounded-full mb-8 opacity-80" />

        {/* Main Message */}
        <p className="text-4xl md:text-5xl text-white font-black mb-6 drop-shadow-lg uppercase tracking-wide">
          18 Cặp Đôi Đã Được Xác Định
        </p>

        {/* Quote */}
        <p className="text-2xl md:text-3xl text-primary-foreground/90 font-medium italic mt-6 leading-relaxed">
          "Chúc các cặp đôi có những giây phút thi đấu vui vẻ<br />
          và đạt kết quả cao nhất!"
        </p>

        {/* Decorative Ribbons */}
        <div className="absolute -top-12 -left-12 text-celebration text-8xl opacity-80 transform -rotate-45">
          🎗️
        </div>
        <div className="absolute -bottom-12 -right-12 text-celebration text-8xl opacity-80 transform rotate-180">
          🎗️
        </div>
      </div>

      {/* Footer Icons */}
      <div className="absolute bottom-0 w-full text-center pb-10 z-10">
        <div className="flex justify-center gap-12 text-primary-foreground/50">
          <Music className="w-10 h-10 animate-bounce" style={{ animationDuration: '2s' }} />
          <Gamepad className="w-10 h-10 animate-bounce" style={{ animationDuration: '2.2s' }} />
          <Trophy className="w-10 h-10 animate-bounce" style={{ animationDuration: '2.4s' }} />
        </div>
      </div>
    </div>
  );
};

// Add CSS for float animation
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
`;
document.head.appendChild(style);
