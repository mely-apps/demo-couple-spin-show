import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shuffle, ArrowRight } from "lucide-react";

interface DemoSlideProps {
  onNext: () => void;
}

export const DemoSlide = ({ onNext }: DemoSlideProps) => {
  const [maleNames, setMaleNames] = useState<string[]>(["", "", ""]);
  const [femaleNames, setFemaleNames] = useState<string[]>(["", "", ""]);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [result, setResult] = useState<Array<{ male: string; female: string }> | null>(null);

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

  const handleRandom = () => {
    // Check if all names are filled
    const allFilled = maleNames.every(n => n.trim()) && femaleNames.every(n => n.trim());
    if (!allFilled) return;

    setIsRandomizing(true);
    setResult(null);

    // Animate for 5 seconds
    setTimeout(() => {
      // Shuffle male names randomly
      const shuffledMales = [...maleNames].sort(() => Math.random() - 0.5);
      
      // Create pairs
      const pairs = shuffledMales.map((male, index) => ({
        male,
        female: femaleNames[index]
      }));

      setResult(pairs);
      setIsRandomizing(false);
    }, 5000);
  };

  const canRandom = maleNames.every(n => n.trim()) && femaleNames.every(n => n.trim());

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-accent flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-in-up">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-wider">
            Demo Random
          </h1>
          <p className="text-xl text-white/80">
            Điền tên 3 nam và 3 nữ để ghép cặp ngẫu nhiên
          </p>
        </div>

        {/* Input Grid */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Male Names */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white text-center mb-4">♂ Nam</h3>
            {maleNames.map((name, index) => (
              <div key={`male-${index}`} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <Input
                  value={name}
                  onChange={(e) => handleMaleChange(index, e.target.value)}
                  placeholder={`Nam ${index + 1}`}
                  className="h-16 text-xl font-semibold text-center bg-white border-4 border-white/30 shadow-xl"
                  disabled={isRandomizing || result !== null}
                />
              </div>
            ))}
          </div>

          {/* Female Names */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white text-center mb-4">♀ Nữ</h3>
            {femaleNames.map((name, index) => (
              <div key={`female-${index}`} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1 + 0.15}s` }}>
                <Input
                  value={name}
                  onChange={(e) => handleFemaleChange(index, e.target.value)}
                  placeholder={`Nữ ${index + 1}`}
                  className="h-16 text-xl font-semibold text-center bg-white border-4 border-white/30 shadow-xl"
                  disabled={isRandomizing || result !== null}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Result Display */}
        {(isRandomizing || result) && (
          <div className="mb-8 bg-white/10 backdrop-blur-md rounded-3xl p-8 border-4 border-white/30">
            <h3 className="text-3xl font-black text-white text-center mb-6">
              {isRandomizing ? "Đang Random..." : "Kết Quả"}
            </h3>
            <div className="space-y-4">
              {result ? (
                result.map((pair, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 flex items-center justify-between shadow-xl animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl font-black text-primary flex-1 text-center">
                      {pair.male}
                    </div>
                    <div className="text-3xl mx-6">❤️</div>
                    <div className="text-2xl font-black text-primary flex-1 text-center">
                      {pair.female}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-white text-2xl animate-pulse">
                  ⏳ Đang quay số...
                </div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={handleRandom}
            disabled={!canRandom || isRandomizing || result !== null}
            size="lg"
            className="text-3xl px-12 py-8 rounded-full shadow-2xl font-black"
            style={{ 
              backgroundColor: 'hsl(var(--celebration))',
              color: 'hsl(var(--primary))',
            }}
          >
            <Shuffle className="mr-3 w-8 h-8" />
            {isRandomizing ? "Đang Random..." : result ? "Đã Xong" : "Random"}
          </Button>

          {result && (
            <Button
              onClick={onNext}
              size="lg"
              className="text-3xl px-12 py-8 rounded-full shadow-2xl font-black"
              style={{ 
                backgroundColor: 'hsl(var(--secondary))',
                color: 'hsl(var(--primary))',
              }}
            >
              <ArrowRight className="mr-3 w-8 h-8" />
              Tiếp Tục
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
