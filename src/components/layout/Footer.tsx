export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-64">
            <h3 className="mb-4 text-xl font-semibold">
              Frave
            </h3>

            <p className="text-sm text-neutral-400">
              Discover luxury fragrances crafted for
              unforgettable moments.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Shop
            </h4>

            <ul className="space-y-2 text-neutral-400">
              <li className="cursor-pointer hover:text-white">
                All Products
              </li>
              <li className="cursor-pointer hover:text-white">
                New Arrivals
              </li>
              <li className="cursor-pointer hover:text-white">
                Best Sellers
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">
              Company
            </h4>

            <ul className="space-y-2 text-neutral-400">
              <li className="cursor-pointer hover:text-white">
                About Us
              </li>
              <li className="cursor-pointer hover:text-white">
                Contact
              </li>
              <li className="cursor-pointer hover:text-white">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
          © 2026 Frave. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
