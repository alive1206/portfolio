type Props = {
  children: React.ReactNode
}

export const LayoutMain: React.FC<Props> = ({ children }) => {
  return <main className="relative flex min-h-screen flex-col items-center justify-between bg-[#141414]">{children}</main>
}
