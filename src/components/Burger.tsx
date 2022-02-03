type Props = {
  active: boolean
  onClick: () => void
}
export default function Burger({ active, onClick }: Props) {
  return (
    <button
      className={`fixed w-9 h-9 cursor-pointer top-4 left-5 z-10 md:hidden ${
        active ? 'active' : ''
      }`}
      onClick={onClick}
    >
      <div
        className={'absolute w-7 h-0.5 bg-black transition-all meat-1'}
        style={{ top: 'calc(50% - 2px / 2)', left: 'calc(50% - 28px / 2)' }}
      />
      <div
        className={'absolute w-7 h-0.5 bg-black transition-all meat-2'}
        style={{ top: 'calc(50% - 2px / 2)', left: 'calc(50% - 28px / 2)' }}
      />
      <div
        className={'absolute w-7 h-0.5 bg-black transition-all meat-3'}
        style={{ top: 'calc(50% - 2px / 2)', left: 'calc(50% - 28px / 2)' }}
      />
      <style jsx>
        {`
          .meat-1 {
            transform: translateY(-10px);
          }
          .meat-2 {
            width: calc(28px - 6px);
          }
          .meat-3 {
            transform: translateY(10px);
          }
          .active .meat-1 {
            transform: rotate(45deg);
          }
          .active .meat-2 {
            opacity: 0;
          }
          .active .meat-3 {
            transform: rotate(-45deg);
          }
        `}
      </style>
    </button>
  )
}
