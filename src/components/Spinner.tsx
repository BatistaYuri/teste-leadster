export function Spinner() {
  return (
    <div data-cy="spinner" className=" w-full flex justify-center">
      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#007dff] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
    </div>
  );
}
