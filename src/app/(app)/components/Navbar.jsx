'use client'

import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const categories = [
  { name: 'Business', path: '/category/business' },
  { name: 'Politics', path: '/category/politics' },
  { name: 'Technology', path: '/category/technology' },
  { name: 'Science', path: '/category/science' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  function handleSearch(e) {
    if (e.keyCode !== 13) return

    router.push(`/search?query=${searchValue}`)
  }

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left section */}
            <div className="flex items-center">
              <button
                className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <Link href="/" className="flex items-center space-x-3 ml-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg">
                  <span className="font-bold text-xl">GN</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  GlobalNews
                </h1>
              </Link>
            </div>

            {/* Center section - Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {categories.map((category) => (
                <Link
                  key={category.path}
                  href={category.path}
                  className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                >
                  {category.name}
                </Link>
              ))}
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              <div
                className={`relative hidden sm:block transition-all duration-200 ${
                  isSearchFocused ? 'w-72' : 'w-64'
                }`}
              >
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  onKeyDown={handleSearch}
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
        fixed inset-0 bg-gray-800/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300
        ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      >
        <div
          className={`
          fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        >
          <div className="py-[70px] px-6 space-y-4">
            {categories.map((category) => (
              <Link
                key={category.path}
                href={category.path}
                className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
