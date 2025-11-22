import { Heart, Crown, Sparkles } from "lucide-react";

export const CoverSlide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center relative overflow-hidden p-8">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Floating Hearts */}
      <Heart className="absolute top-20 left-20 w-12 h-12 text-heart/30 animate-pulse-heart" />
      <Heart className="absolute bottom-32 right-32 w-16 h-16 text-heart/20" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute top-40 right-1/4 w-10 h-10 text-celebration/50 animate-blink" />
      <Sparkles className="absolute bottom-40 left-1/4 w-8 h-8 text-celebration/40 animate-blink" style={{ animationDelay: '0.7s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl animate-slide-in-up">
        {/* Crown Icon */}
        <div className="mb-8 flex justify-center">
          <Crown className="w-24 h-24 text-celebration drop-shadow-2xl" />
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-black text-white tracking-wider mb-6 uppercase drop-shadow-2xl">
          Giải Nội Bộ Mạnh Hoàng
        </h1>

        {/* Divider with Heart */}
        <div className="flex items-center justify-center gap-6 my-8">
          <div className="h-1 w-32 bg-celebration rounded-full" />
          <Heart className="w-16 h-16 text-heart drop-shadow-lg animate-pulse-heart fill-heart" />
          <div className="h-1 w-32 bg-celebration rounded-full" />
        </div>

        {/* Subtitle - Main Focus */}
        <h2 
          className="text-8xl md:text-9xl font-black text-celebration mb-10 drop-shadow-2xl"
          style={{ fontFamily: "'Pacifico', cursive", textShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}
        >
          ĐÔI NAM NỮ
        </h2>

        {/* Info Badge */}
        <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-12 py-5 border-2 border-white/30 shadow-2xl">
          <p className="text-2xl md:text-3xl text-white font-bold flex items-center gap-3">
            <span>♂</span>
            Ghép Đôi Ngẫu Nhiên
            <span>♀</span>
          </p>
        </div>

        {/* Instruction */}
        <p className="mt-12 text-white/70 text-lg italic">
          Nhấn phím mũi tên hoặc vuốt để xem các cặp đôi
        </p>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 p-8 opacity-20">
        <Sparkles className="w-20 h-20 text-celebration transform -rotate-45" />
      </div>
      <div className="absolute bottom-0 right-0 p-8 opacity-20">
        <Sparkles className="w-20 h-20 text-celebration transform rotate-135" />
      </div>
    </div>
  );
};
