export default function Download(): JSX.Element {
  return (
    <div className="w-screen h-screen bg-dot-sky-400/[0.4] flex flex-col gap-4 items-center justify-center">
      <p className="font-poppins text-2xl md:text-4xl font-bold max-w-lg px-4 text-center text-foreground">
        Spito is in it's early stage of development. Currently, we're not ready
        to release a stable version.
      </p>
      <p className="text-xl font-semibold text-muted-foreground">Sorry for inconvenience.</p>
      <p className="text-lg font-poppins text-muted-foreground font-medium">Stay tuned.</p>
    </div>
  );
}
