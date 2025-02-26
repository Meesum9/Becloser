import Image from 'next/image';
// If you have an image in the public folder, you can import like this:
// import loginImage from '/public/my-login-image.jpg'; 
// Or if you have an external image, use the URL directly.

export default function LoginPage() {
  return (
    <main className="flex h-screen">
      {/* Left Section: Background image + tagline */}
      <div className="relative w-1/2 h-full hidden md:block">
        {/* 
          If you have a local image, do:
          <Image 
            src={loginImage} 
            alt="People working on laptops" 
            fill 
            objectFit="cover"
          />
        */}

        {/* Example using a background image in CSS or an <Image> component */}
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{ backgroundImage: "url('/my-login-image.jpg')" }}>
        </div>
        
        {/* Text overlay (bottom-left or bottom-center) */}
        <div className="absolute bottom-10 left-10 text-white text-2xl font-bold">
          SWAP WORKPLACE NOT PEOPLE
        </div>
      </div>

      {/* Right Section: Login form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-white">
        <div className="max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4">Login to Access your Dashboard</h1>

          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block mb-1 font-medium">Email address</label>
              <input 
                type="email" 
                placeholder="e.g. user@gmail.com" 
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-1 font-medium">Password input</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              <div className="text-right mt-1">
                <a href="#" className="text-blue-600 text-sm">Forgot Password?</a>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
