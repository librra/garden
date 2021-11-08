import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import EmailCTA from '@/components/EmailCTA'

export default function Footer() {
  return (
    <footer className="mt-0">
      <div className="flex flex-col items-center mt-6">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="tiktok" href={siteMetadata.tiktok} size="6" />
        </div>
      </div>
    </footer>
  )
}
