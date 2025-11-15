import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  initial: string;
  date: string;
  rating: number;
  text: string;
  source: 'Google Reviews' | 'Yelp Reviews';
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Lisa L.',
    initial: 'L',
    date: '06/12/2025',
    rating: 5,
    text: 'Mark was great to work with and very communicative! They arrived early and did the job perfectly',
    source: 'Google Reviews',
  },
  {
    id: 2,
    name: 'Sally W.',
    initial: 'S',
    date: '06/03/2025',
    rating: 5,
    text: 'Mark was punctual and did an excellent job cleaning and sanitizing two mattresses and a couch. Very professional and efficient!',
    source: 'Yelp Reviews',
  },
  {
    id: 3,
    name: 'Pavan K.',
    initial: 'P',
    date: '05/13/2025',
    rating: 5,
    text: 'Excellent service provided as promised. I will call again and refer to my friends.',
    source: 'Yelp Reviews',
  },
  {
    id: 4,
    name: 'Michael R.',
    initial: 'M',
    date: '05/01/2025',
    rating: 5,
    text: 'Outstanding carpet cleaning service! Our carpets look brand new. Highly recommend ExecuCare for their professionalism and attention to detail.',
    source: 'Google Reviews',
  },
  {
    id: 5,
    name: 'Jennifer T.',
    initial: 'J',
    date: '04/20/2025',
    rating: 5,
    text: 'Best cleaning service in the area! They removed stains I thought were permanent. Very impressed with the results.',
    source: 'Google Reviews',
  },
  {
    id: 6,
    name: 'David M.',
    initial: 'D',
    date: '04/15/2025',
    rating: 5,
    text: 'Fast, efficient, and affordable. The team was courteous and did an amazing job on our office carpets. Will definitely use again!',
    source: 'Yelp Reviews',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const currentReviews = reviews.slice(
    currentIndex * reviewsPerPage,
    (currentIndex + 1) * reviewsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
          What Our Clients Are Saying
        </h2>

        {/* Reviews Container */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentReviews.map((review) => (
              <Card
                key={review.id}
                className="p-8 flex flex-col items-center text-center bg-card hover:shadow-lg transition-smooth"
              >
                {/* Avatar Circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-white">
                    {review.initial}
                  </span>
                </div>

                {/* Reviewer Name */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {review.name}
                </h3>

                {/* Date */}
                <p className="text-sm text-muted-foreground mb-4">
                  {review.date}
                </p>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground mb-6 flex-1">
                  {review.text}
                </p>

                {/* Source Badge */}
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {review.source}
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-white transition-smooth"
            >
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </Button>

            {/* Page Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    index === currentIndex
                      ? 'bg-secondary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-white transition-smooth"
            >
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
