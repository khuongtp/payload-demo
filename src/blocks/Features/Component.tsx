import type { Feature, FeaturesBlock } from '@/payload-types'

const FeaturesBlock = (props: FeaturesBlock) => {
  const { title, features, backgroundImage, backgroundStyle } = props

  return (
    <div
      className="bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          backgroundStyle === 'image' && typeof backgroundImage === 'object' && backgroundImage?.url
            ? `url(${backgroundImage.url})`
            : undefined,
      }}
    >
      <div className="container py-20">
        <div className="display-3 text-center">{title}</div>
        <div className="space-x-8 flex mt-20">
          {features?.map((item, index) => {
            return <FeatureItem key={index} feature={item as Feature} />
          })}
        </div>
      </div>
    </div>
  )
}

const FeatureItem = ({ feature }: { feature: Feature }) => {
  return (
    <div className="text-center">
      <div className="rounded-2xl mx-auto p-6 w-fit border">
        <img src="/api/media/file/Icon.svg" />
      </div>
      <div className="headline-2 mt-10">{feature.title}</div>
      <div className="paragraph-2 mt-4">{feature.description}</div>
    </div>
  )
}

export default FeaturesBlock
