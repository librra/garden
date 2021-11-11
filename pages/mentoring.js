import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Mentoring() {
  return (
      <PageSEO
        title={`Mentoring - ${siteMetadata.author}`}
        description={`Mentoring - ${siteMetadata.author}`}
      />
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

        <div class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <h1><b>Achievement</b></h1>
 <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Customizing your
                  <code class="text-sm font-bold text-gray-900">tailwind.config.js</code> file
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">
                  Extracting classes with
                  <code class="text-sm font-bold text-gray-900">@apply</code>
                </p>
              </li>
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg class="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p class="ml-2">Code completion with instant preview</p>
              </li>
            </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
