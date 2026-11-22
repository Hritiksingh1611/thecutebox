import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-ivory pt-20">
      <div className="text-center container-site max-w-lg py-24">
        <div className="text-8xl mb-6">🪔</div>
        <h1 className="font-display text-5xl font-bold text-indigo-deep mb-3">404</h1>
        <h2 className="font-display text-2xl text-saffron-600 mb-4">
          This Gift Got Lost in the Bazaars
        </h2>
        <p className="text-earth-light mb-8 text-sm">
          The page you are looking for does not exist — but thousands of authentic Indian treasures await your discovery.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Return to Home
          </Link>
          <Link to="/catalog" className="btn-secondary">
            Explore All Curations
          </Link>
        </div>
      </div>
    </main>
  )
}
