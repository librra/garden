import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

export default function Mentoring() {
  return (
    <>
      <PageSEO
        title={`Mentoring - ${siteMetadata.author}`}
        description={`Mentoring - ${siteMetadata.author}`}
      />
      <div className="divide-y max-w-6xl mx-auto">
        <div className="mt-24 text-center">
          <h1 className="text-lg font-extrabold">
            If you'd be interested in getting some guidance from me about any of the following
            topics, feel free to hit me up on{' '}
            <Link className="text-primary-500 underline" href="https://twitter.com/iamdavidlevai">
              Twitter DMs
            </Link>
            .
          </h1>
<div className="w-1/3 bg-white rounded-lg shadow">
    <ul className="divide-y-2 divide-gray-100">
        <li className="p-3">List Item 1</li>
        <li className="p-3">List Item 2</li>
        <li className="p-3">List Item 3</li>
        <li className="p-3">List Item 4</li>
    </ul>
</div>
        </div>
      </div>
    </>
  )
}
