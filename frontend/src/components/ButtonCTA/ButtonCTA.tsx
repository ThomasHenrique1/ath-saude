import Link from "next/link";


export default function ButtonCTA (){
    return (
        <div className="text-center p-6 mt-6">
        <Link
          href="/formulario"
          className="bg-blue-600 text-white text-lg px-10 py-4 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
        >
          <span>Solicitar Cotação</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    )
}