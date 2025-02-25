const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImage }) => {
  const handleClick =() => 
  return (
    <div className={`border-2 
    rounded-x1
      ${bigShoeImage === imgURl
        ? 'border-coral-red'
        : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >ShoeCard</div>
  )
}

export default ShoeCard