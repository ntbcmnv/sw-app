import BankCard from '@/components/BankCard/BankCard.tsx';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel.tsx';
import { useBanks } from '@/components/Banks/hooks/useBanks.ts';

const Banks = () => {
  const {
    filteredRates,
  } = useBanks()
  return (
    <div className="px-6 sm:px-8">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto relative"
      >
        <CarouselContent className="items-stretch -mx-2">
          {filteredRates.map((rate) => (
            <CarouselItem
              key={rate.id}
              className="px-2 md:basis-1/2 lg:basis-1/4"
            >
              <div className="h-full">
                <BankCard info={rate}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-8 sm:-left-10"/>
        <CarouselNext className="-right-8 sm:-right-10"/>
      </Carousel>
    </div>
  );
};

export default Banks;