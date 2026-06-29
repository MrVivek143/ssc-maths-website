import Link from "next/link";
import Hero from "@/components/dashboard/Hero";
import SearchBar from "@/components/dashboard/SearchBar";
import Stats from "@/components/dashboard/Stats";
import Navbar from "@/components/layout/Navbar";
import Categories from "@/components/dashboard/Categories";
import TrendingCourses from "@/components/dashboard/TrendingCourses";
import ContinueLearning from "@/components/dashboard/ContinueLearning";
import Sidebar from "@/components/layout/Sidebar";
import FeaturedBanner from "@/components/dashboard/FeaturedBanner";
import LatestNotes from "@/components/dashboard/LatestNotes";
import LatestVideos from "@/components/dashboard/LatestVideos";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="mx-auto flex max-w-7xl gap-8 px-6 py-8">

        <Sidebar />

        <div className="flex-1">

          <Hero />

          <SearchBar />

          <Stats />

          <Categories />

          <TrendingCourses />

          <FeaturedBanner />

          <LatestNotes />

          <LatestVideos />

          <ContinueLearning />

        </div>

      </div>

    </main>
  );
}