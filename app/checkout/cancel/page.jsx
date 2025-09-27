export default function CancelPage() {
  return (
    <div className="mx-auto max-w-screen-sm px-4 pt-16 text-center">
      <h1 className="text-2xl font-semibold neon-heading">Payment canceled</h1>
      <p className="text-white/80 mt-2">No charge was made. You can try again anytime.</p>
      <a href="/" className="mt-6 inline-block rounded-full px-4 py-2 btn-neon-outline border">Back home</a>
    </div>
  );
}


