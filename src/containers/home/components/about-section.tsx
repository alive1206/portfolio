export const AboutSection = () => {
  return (
    <div className="absolute left-[100vw] h-full w-full text-6xl" style={{ textShadow: '1px 1px 2px pink' }}>
      <div className="grid h-[calc(100vh-200px)] grid-cols-2 grid-rows-4 gap-4 px-8">
        <div className="row-span-3 rounded border">A</div>
        <div className="row-span-1 rounded border">B</div>
        <div className="row-span-2 rounded border">C</div>
        <div className="col-span-2 rounded border">D</div>
      </div>
    </div>
  )
}
