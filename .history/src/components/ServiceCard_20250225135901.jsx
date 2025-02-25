const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      <div>
        <img
          src={imgURL}
          alt={label}
          className="w-[120px] h-[120px]"
        />
      </div>
    </div>
  )
}

export default ServiceCard