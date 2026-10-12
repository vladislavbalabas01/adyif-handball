const NewsSkeleton = () => {
  return (
    <>
      {Array.from(
        { length: parseInt(process.env.NEWS_PER_PAGE || "8", 10) },
        (_, index) => (
          <div
            key={index}
            className="flex h-95 flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 animate-pulse"
          >
            <div className="h-48 w-full bg-slate-800" />

            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="h-4 w-1/3 rounded bg-slate-800" />
              <div className="h-6 w-full rounded bg-slate-800" />
              <div className="h-4 w-2/3 rounded bg-slate-800" />
            </div>
          </div>
        ),
      )}
    </>
  );
};

export default NewsSkeleton;
