type Props = {
  children: React.ReactNode
}

export const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <main className="perspective-[1000px] fixed left-0 top-0 h-full w-full overflow-x-hidden bg-[#141414] text-white">
      {children}
    </main>
  )
}
