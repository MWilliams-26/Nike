const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeIMG }) => {
  const handleClick = () => {
    if (bigShoeIMG !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }
  return (
    <div className={`border-2 
    rounded-x1
      ${bigShoeI === imgURl
        ? 'border-coral-red'
        : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div>
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard