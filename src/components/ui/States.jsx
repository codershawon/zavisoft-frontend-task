export function Loader() {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-[#4A69E2] rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium">Loading drops...</p>
    </div>
  );
}

export function ErrorState({ message }) {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-center">
      <p className="text-red-500 font-bold text-xl mb-2">Oops! Something went wrong.</p>
      <p className="text-gray-600">{message}</p>
    </div>
  );
}