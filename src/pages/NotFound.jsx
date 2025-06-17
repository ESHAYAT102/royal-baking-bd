import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-black opacity-80">404</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Looks like this recipe got lost in the oven! The page you're looking
            for doesn't exist.
          </p>
        </div>

        <div className="space-y-4">
          <Button link="/">Back to Home</Button>
        </div>
      </div>
    </div>
  );
}
