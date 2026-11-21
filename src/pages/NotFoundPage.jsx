import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream-light pt-20">
      <div className="text-center container-site max-w-lg py-24">
        <div className="text-8xl mb-6">🎁</div>
        <h1 className="font-display text-5xl font-bold text-charcoal mb-3">404</h1>
        <h2 className="font-display text-2xl text-charcoal mb-4">This gift got lost in transit</h2>
        <p className="text-charcoal-muted mb-8">
          The page you're looking for doesn't exist — but there are plenty of beautiful gifts waiting for you.
        </p>
        <div className="flex gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={16} /> Back to Home
          </Link>
          <Link to="/catalog" className="btn-secondary">
            Explore Gifts
          </Link>
        </div>
      </div>
    </main>
  )
}
