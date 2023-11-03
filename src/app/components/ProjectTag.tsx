interface ProjectTagProps {
  name: string
  onClick: (newTag: string) => void
  isSelected: boolean
}

export default function ProjectTag({ name, onClick, isSelected }: ProjectTagProps) {
  const buttonStyles = isSelected
    ? 'text-white border-primary-500'
    : 'text-zinc-400 border-slate-600 hover:border-white'
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-2 text-lg`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  )
}
