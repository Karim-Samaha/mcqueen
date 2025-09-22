import HeroSection from "@/shared/layout/Main";
import MainLayout from "@/shared/layout/MainLayout";
import JobSearch from "@/shared/features/job-search";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection>
        <JobSearch />
      </HeroSection>
    </MainLayout>
  );
}
