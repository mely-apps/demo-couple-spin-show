import { useState } from "react";
import { Heart, RotateCw, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dummyMaleNames, dummyFemaleNames } from "@/data/couples";

interface SlotMachineSlideProps {
  coupleNumber: number;
  totalCouples: number;
  maleName: string;
  femaleName: string;
  onNext: () => void;
}

export const SlotMachineSlide = ({
  coupleNumber,
  totalCouples,
  maleName,
  femaleName,
  onNext,
}: SlotMachineSlideProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSpin = () => {
    if (isSpinning || showResult) return;
    
    setIsSpinning(true);
    
    // Animate for 8 seconds then show result
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      createConfetti();
    }, 8000);
  };

  const createConfetti = () => {
    const colors = ['#fcd34d', '#f472b6', '#60a5fa', '#34d399'];
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'fixed w-3 h-3 rounded-full z-50 pointer-events-none';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = '50%';
      confetti.style.top = '50%';
      document.body.appendChild(confetti);

      const angle = Math.random() * Math.PI * 2;
      const velocity = 5 + Math.random() * 10;
      const tx = Math.cos(angle) * velocity * 30;
      const ty = Math.sin(angle) * velocity * 30;

      confetti.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      }).onfinish = () => confetti.remove();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex flex-col items-center justify-start p-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <Heart className="absolute top-20 right-20 w-16 h-16 text-heart/20 transform rotate-12" />
      <Sparkles className="absolute bottom-20 left-20 w-14 h-14 text-celebration/30 transform -rotate-12" />

      {/* Header */}
      <div className="mt-8 text-center z-10 mb-8 animate-slide-in-up">
        <h2 className="text-2xl text-primary-foreground/80 font-bold tracking-widest uppercase mb-3 opacity-90">
          Giải Nội Bộ Mạnh Hoàng
        </h2>
        <div className="bg-white px-8 py-3 rounded-full inline-block shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-primary">
            Cặp Đôi Số <span className="text-5xl md:text-6xl text-celebration">{coupleNumber}</span>/{totalCouples}
          </h1>
        </div>
      </div>

      {/* Slot Machine Frame */}
      <div className="w-full max-w-6xl bg-celebration rounded-3xl p-6 shadow-2xl border-8 border-secondary relative z-10 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
        {/* Decorative Bulbs */}
        <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full animate-blink shadow-lg" />
        <div className="absolute top-3 left-1/2 w-4 h-4 bg-white rounded-full animate-blink shadow-lg" style={{ animationDelay: '0.3s' }} />
        <div className="absolute top-3 right-3 w-4 h-4 bg-white rounded-full animate-blink shadow-lg" style={{ animationDelay: '0.6s' }} />
        <div className="absolute bottom-3 left-3 w-4 h-4 bg-white rounded-full animate-blink shadow-lg" style={{ animationDelay: '0.9s' }} />
        <div className="absolute bottom-3 left-1/2 w-4 h-4 bg-white rounded-full animate-blink shadow-lg" style={{ animationDelay: '1.2s' }} />
        <div className="absolute bottom-3 right-3 w-4 h-4 bg-white rounded-full animate-blink shadow-lg" style={{ animationDelay: '1.5s' }} />

        <div className="grid grid-cols-11 gap-6 items-center">
          {/* Male Slot */}
          <div className="col-span-5">
            <div className="text-center mb-3 text-primary font-bold text-xl uppercase flex items-center justify-center gap-2">
              <span>♂</span> Nam
            </div>
            <div className="bg-white rounded-2xl h-48 overflow-hidden shadow-inner border-4 border-card relative">
              {isSpinning ? (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col animate-slot-spin">
                    {[...dummyMaleNames, ...dummyMaleNames, ...dummyMaleNames].map((name, idx) => (
                      <div key={idx} className="h-48 flex items-center justify-center text-3xl font-black text-primary px-4 text-center shrink-0">
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              ) : showResult ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-black text-primary px-6 text-center bg-muted rounded-xl py-8 shadow-lg animate-slide-in-up">
                    {maleName}
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-black text-muted-foreground">
                    ???
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Heart Icon */}
          <div className="col-span-1 flex justify-center">
            <div className="bg-white p-5 rounded-full shadow-xl border-4 border-heart/30">
              <Heart className={`w-12 h-12 text-heart fill-heart ${showResult ? 'animate-pulse-heart' : ''}`} />
            </div>
          </div>

          {/* Female Slot */}
          <div className="col-span-5">
            <div className="text-center mb-3 text-primary font-bold text-xl uppercase flex items-center justify-center gap-2">
              <span>♀</span> Nữ
            </div>
            <div className="bg-white rounded-2xl h-48 overflow-hidden shadow-inner border-4 border-card relative">
              {isSpinning ? (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="flex flex-col animate-slot-spin" style={{ animationDelay: '0.3s' }}>
                    {[...dummyFemaleNames, ...dummyFemaleNames, ...dummyFemaleNames].map((name, idx) => (
                      <div key={idx} className="h-48 flex items-center justify-center text-3xl font-black text-primary px-4 text-center shrink-0">
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              ) : showResult ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-black text-primary px-6 text-center bg-muted rounded-xl py-8 shadow-lg animate-slide-in-up">
                    {femaleName}
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-black text-muted-foreground">
                    ???
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <Button
        onClick={showResult ? onNext : handleSpin}
        disabled={isSpinning}
        size="lg"
        className="mt-8 text-4xl px-16 py-8 rounded-full shadow-2xl font-black z-10 animate-slide-in-up"
        style={{ 
          animationDelay: '0.4s',
          fontFamily: "'Pacifico', cursive",
          backgroundColor: showResult ? 'hsl(var(--celebration))' : 'hsl(var(--secondary))',
          color: 'hsl(var(--primary))',
          boxShadow: '0 8px 0 hsl(var(--accent))',
        }}
      >
        {isSpinning ? (
          <>
            <RotateCw className="mr-3 animate-spin" />
            Đang quay...
          </>
        ) : showResult ? (
          <>
            <Check className="mr-3" />
            Hoàn Thành
          </>
        ) : (
          <>
            <RotateCw className="mr-3" />
            Quay Số
          </>
        )}
      </Button>

      {/* Subtext */}
      <p className="mt-6 text-white/60 text-sm italic z-10">
        *Kết quả được lựa chọn ngẫu nhiên bởi hệ thống
      </p>
    </div>
  );
};
