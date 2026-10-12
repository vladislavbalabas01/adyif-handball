import { Suspense } from "react";
import { HeadingOfSection } from "@/components/ui/HeadingOfSection";
import NewsSkeleton from "@/components/news/NewsSkeleton";
import { getSafePageNumber } from "@/utils/utils";
import { NewsContent } from "@/components/news/NewsContent";
import { PageProps } from "@/types/interfaces";

const Page = async ({ searchParams }: PageProps) => {
  const resolvedParams = await searchParams;
  const currentPage = getSafePageNumber(resolvedParams.page);

  return (
    <main className="mt-6 sm:mt-8 md:mt-32 lg:mt-32 xl:mt-34 2xl:mt-36">
      <div className="container">
        <Suspense key={currentPage} fallback={<NewsSkeleton />}>
          <NewsContent page={currentPage} />
        </Suspense>
      </div>
    </main>
  );
};

export default Page;
