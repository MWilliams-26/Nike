import { services } from "../constants"

const Services = ({ }) => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
          <div className="flex items-start gap-2 mb-2">
            <img src={service.imgURL} alt={service.label} width={24} height={24} />
            <h3 className="font-montserrat text-3xl leading-normal font-bold">{service.label}</h3>
          </div>
          <p className="mt-6 font-montserrat text-lg leading-normal text-slate-gray">{service.subtext}</p>
        </div>
      ))}
    </section>
  )
}

export default Services