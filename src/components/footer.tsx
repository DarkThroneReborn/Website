import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const navigation = [
  {
    name: 'Discord',
    href: 'https://discord.gg/BCrdJSpXWg',
    icon: faDiscord,
  },
  {
    name: 'Github',
    href: 'https://github.com/DarkThroneReborn',
    icon: faGithub,
  }
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <FontAwesomeIcon size={'xl'} icon={item.icon} />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            Version: {process.env.REACT_APP_BUILD_VERSION}
          </p>
        </div>
      </div>
    </footer>
  )
}