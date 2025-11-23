import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, ArrowRight } from "lucide-react";

interface InputSlideProps {
  onComplete: (maleNames: string[], femaleNames: string[]) => void;
}

export const InputSlide = ({ onComplete }: InputSlideProps) => {
  const [maleNames, setMaleNames] = useState<string[]>(Array(3).fill(""));
  const [femaleNames, setFemaleNames] = useState<string[]>(Array(3).fill(""));

  const handleMaleChange = (index: number, value: string) => {
    const newNames = [...maleNames];
    newNames[index] = value;
    setMaleNames(newNames);
  };

  const handleFemaleChange = (index: number, value: string) => {
    const newNames = [...femaleNames];
    newNames[index] = value;
    setFemaleNames(newNames);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex flex-col items-center justify-start p-8 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <Users className="absolute top-20 right-20 w-16 h-16 text-white/20 transform rotate-12" />

      {/* Header */}
      <div className="mt-8 text-center z-10 mb-8 animate-slide-in-up">
        <h2 className="text-2xl text-primary-foreground/80 font-bold tracking-widest uppercase mb-3 opacity-90">
          Giải Nội Bộ Mạnh Hoàng
        </h2>
        <div className="bg-white px-8 py-3 rounded-full inline-block shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider text-primary">
            Nhập Danh Sách Tham Gia
          </h1>
        </div>
        <p className="text-white/70 mt-4 text-lg">
          Vui lòng nhập tên 3 nam và 3 nữ tham gia
        </p>
      </div>

      {/* Input Grid */}
      <div className="w-full max-w-6xl bg-white rounded-3xl p-8 shadow-2xl relative z-10 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="grid grid-cols-2 gap-8">
          {/* Male Column */}
          <div>
            <div className="text-center mb-4 bg-primary text-primary-foreground py-3 rounded-xl">
              <h3 className="text-2xl font-bold uppercase flex items-center justify-center gap-2">
                <span>♂</span> Danh Sách Nam
              </h3>
            </div>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {maleNames.map((name, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lg font-bold text-primary w-8">{index + 1}.</span>
                  <Input
                    value={name}
                    onChange={(e) => handleMaleChange(index, e.target.value)}
                    placeholder={`Tên nam ${index + 1}`}
                    className="text-lg py-6 border-2 border-primary/20 focus:border-primary"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Female Column */}
          <div>
            <div className="text-center mb-4 bg-celebration text-primary py-3 rounded-xl">
              <h3 className="text-2xl font-bold uppercase flex items-center justify-center gap-2">
                <span>♀</span> Danh Sách Nữ
              </h3>
            </div>
            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              {femaleNames.map((name, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-lg font-bold text-primary w-8">{index + 1}.</span>
                  <Input
                    value={name}
                    onChange={(e) => handleFemaleChange(index, e.target.value)}
                    placeholder={`Tên nữ ${index + 1}`}
                    className="text-lg py-6 border-2 border-celebration/20 focus:border-celebration"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <Button
        onClick={() => onComplete(maleNames, femaleNames)}
        size="lg"
        className="mt-8 text-3xl px-12 py-8 rounded-full shadow-2xl font-black z-10 animate-slide-in-up"
        style={{ 
          animationDelay: '0.4s',
          fontFamily: "'Pacifico', cursive",
          backgroundColor: 'hsl(var(--celebration))',
          color: 'hsl(var(--primary))',
          boxShadow: '0 8px 0 hsl(var(--accent))',
        }}
      >
        Bắt Đầu Ghép Cặp
        <ArrowRight className="ml-3 w-8 h-8" />
      </Button>

      {/* Subtext */}
      <p className="mt-6 text-white/60 text-sm italic z-10">
        *Hệ thống sẽ tự động ghép cặp ngẫu nhiên
      </p>
    </div>
  );
};
