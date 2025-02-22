function SkeletonCard() {
    return (
      <div className="flex flex-col items-center rounded-sm overflow-hidden bg-gradient-to-br shadow-md shadow-[rgba(0,0,0,0.8)] border-none z-10 h-[calc(30vh-30px)] w-full bg-gray-300 animate-pulse h-[calc(30vh-30px)] min-h-[240px]">
        <div className='pt-2'>
          <div className="bg-gray-400 rounded-full w-8 h-8"/>
        </div>
        <div className="w-full text-center p-2">
          <div className="bg-gray-400 rounded w-3/4 h-6 mx-auto"/>
        </div>
        <div className="text-center grow w-full">
          <div className="bg-gray-400 rounded w-5/6 h-4 mx-auto my-2"/>
        </div>
        <div className="gap-4 lg:gap-6 flex justify-center p-2">
          <div className="bg-gray-400 rounded w-20 h-8"/>
          <div className="bg-gray-400 rounded w-20 h-8"/>
        </div>
      </div>
    );
  }
  
  export default SkeletonCard;