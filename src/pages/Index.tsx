import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CoverSlide } from "@/components/CoverSlide";
import { DemoSlide } from "@/components/DemoSlide";
import { InputSlide } from "@/components/InputSlide";
import { SlotMachineSlide } from "@/components/SlotMachineSlide";
import { EndingSlide } from "@/components/EndingSlide";
import { couples } from "@/data/couples";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [inputtedMales, setInputtedMales] = useState<string[]>([]);
  const [inputtedFemales, setInputtedFemales] = useState<string[]>([]);
  const totalSlides = couples.length + 4; // Demo + Cover + Input + 18 couples + Ending

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  // Touch swipe support
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      if (touchStartX - touchEndX > 50) {
        nextSlide();
      }
      if (touchEndX - touchStartX > 50) {
        prevSlide();
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderSlide = () => {
    // Demo slide
    if (currentSlide === 0) {
      return <DemoSlide onNext={() => setCurrentSlide(1)} />;
    }
    
    // Cover slide
    if (currentSlide === 1) {
      return <CoverSlide onNext={() => setCurrentSlide(2)} />;
    }
    
    // Input slide
    if (currentSlide === 2) {
      return (
        <InputSlide 
          onComplete={(males, females) => {
            setInputtedMales(males);
            setInputtedFemales(females);
            setCurrentSlide(3);
          }} 
        />
      );
    }
    
    // Ending slide
    if (currentSlide === totalSlides - 1) {
      return <EndingSlide />;
    }

    // Couple slides (3-20)
    const coupleIndex = currentSlide - 3;
    const couple = couples[coupleIndex];
    
    // Find the inputted names that match this couple (case-insensitive, trim spaces)
    const findName = (nameToFind: string, nameList: string[]) => {
      const normalized = nameToFind.toLowerCase().trim();
      return nameList.find(n => n.toLowerCase().trim() === normalized) || nameToFind;
    };
    
    const displayMale = inputtedMales.length > 0 
      ? findName(couple.male, inputtedMales)
      : couple.male;
    
    const displayFemale = inputtedFemales.length > 0
      ? findName(couple.female, inputtedFemales)
      : couple.female;
    
    return (
      <SlotMachineSlide
        key={currentSlide}
        coupleNumber={couple.id}
        totalCouples={couples.length}
        maleName={displayMale}
        femaleName={displayFemale}
        onNext={() => setCurrentSlide(currentSlide + 1)}
      />
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Slide Content */}
      <div className="transition-opacity duration-500">
        {renderSlide()}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="secondary"
          size="lg"
          className="rounded-full shadow-2xl border-2 border-white/30"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border-2 border-white/30">
          <span className="font-bold text-primary text-lg">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>

        <Button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          variant="secondary"
          size="lg"
          className="rounded-full shadow-2xl border-2 border-white/30"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

    </div>
  );
};

export default Index;
