import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const features = [
  // {
  //   name: 'Invite team members',
  //   description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
  // },
  // { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
  // {
  //   name: 'Keyboard shortcuts',
  //   description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  // },
  // {
  //   name: 'Calendars',
  //   description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  // },
  // { name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
  // { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    name: 'Open Source',
    description: 'Dark Throne Reborn is open source, and you can contribute to the project on Github.',
  },
  {
    name: 'Mobile Friendly UI',
    description: 'Everything is designed to be used on a phone as well as a computer, enjoy the same experience everywhere.',
  },
]

export default function Features() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Key Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Built to be fun</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Dark Throne Reborn is built to be fun, and to be a great experience for everyone. We want to make sure that you have a great time playing the game, and that you can enjoy it on any device.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <FontAwesomeIcon icon={faCheck} className="absolute left-0 top-1 h-5 w-5 text-indigo-500" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}