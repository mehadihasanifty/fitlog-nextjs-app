import HeroBanner from "@/components/homepage/HeroBanner";

// import WorkoutPage from "./workouts/page";
import WorkoutLibraray from "@/components/homepage/WorkoutLibraray";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Suspense
        fallback={
          <p className="text-center text-base md:text-2xl ">
            Workout Library Data is loading...
            <span className="loading loading-spinner text-success"></span>
          </p>
        }
      >
        <WorkoutLibraray />
      </Suspense>
    </div>
  );
}