import './modalCard.scss'

export default function ModalCard({ children }) {
  return (
    <div className='backdrop'>
      <div className="card">
        {children}
      </div>
    </div>
  )
}